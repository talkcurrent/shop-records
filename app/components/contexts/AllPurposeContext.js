"use client";

import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Api } from "../network/api";
import axios from "axios";
import customFetch from "../request/customFetch";
import { useRouter } from "expo-router";
import UnAuthorized from "../../../reusables/UnAuthorized";

export const AllContext = React.createContext();

export const AllProvider = (props) => {
    const { serverHost, clientHost } = Api();
    const router = useRouter();

    const [authUser, setauthUser] = useState(null)

    const [language, setlanguage] = useState(null)
    const [langCode, setlangCode] = useState(null)
    const [countries, setcountries] = useState([])
    const [states, setstates] = useState([])
    const [localGovts, setlocalGovts] = useState([])

    useEffect(() => {
        putLangToStorage();
    }, [language])

    useEffect(() => {
        getLangFromStorage();
    }, [])

    const getauthUser = async (requestURL) => {
        const response = await customFetch(
            `${serverHost}/api/user`,
            'POST',
            '',
        )
        if (response.ok) {
            let result = await response.json();
            setauthUser(result)
            if (Platform.OS === 'web') {
                await AsyncStorage.removeItem('prevPath');
            } else {
                await SecureStore.deleteItemAsync('prevPath');
            }
        } else {
            UnAuthorized(router, requestURL, `${clientHost}/guest/Login`)
        }
    }

    const putLangToStorage = async () => {
        const lan = language == "English" ? 'en' :
            language == "Arabic" ? 'ar' :
                language == "French" ? 'fa' :
                    language == "Hausa" ? 'ha' :
                        language == "Igbo" ? 'ig' : 'yo';
        try {
            // AsyncStorage doesn't work well with physical ios device
            if (Platform.OS === 'web') {
                const lang = await AsyncStorage.getItem('sr-language');
                if (lang != lan) {
                    await AsyncStorage.setItem('sr-language', lan).then(() => setlangCode(lan));
                }
            } else {
                SecureStore.getItemAsync('sr-language').then(lang => {
                    if (lang != lan) {
                        SecureStore.setItemAsync('sr-language', lan).then(() => setlangCode(lan));
                    }
                });
            }
        } catch (e) {
            // saving error
        }
    }
    const getLangFromStorage = async () => {
        // AsyncStorage doesn't work well with physical ios device
        if (Platform.OS === 'web') {
            const lang = await AsyncStorage.getItem('sr-language');
            if (lang !== null) {
                const lan = lang == "yo" ? 'Yoruba' :
                    lang == "ar" ? 'Arabic' :
                        lang == "fa" ? 'French' :
                            lang == "ha" ? 'Hausa' :
                                lang == "ig" ? 'Igbo' : 'English';

                setlanguage(lan);
                setlangCode(lang);
            } else {
                setlanguage("English");
                setlangCode("en");
            }
        } else {
            SecureStore.getItemAsync('sr-language').then(lang => {
                if (lang !== null) {
                    const lan = lang == "yo" ? 'Yoruba' :
                        lang == "ar" ? 'Arabic' :
                            lang == "fa" ? 'French' :
                                lang == "ha" ? 'Hausa' :
                                    lang == "ig" ? 'Igbo' : 'English';

                    setlanguage(lan);
                    setlangCode(lang);
                } else {
                    setlanguage("English");
                    setlangCode("en");
                }
            });
        }
    }

    const getCountries = async () => {

        try {
            const { data } = await axios.get(`${serverHost}/api/get_countries`);
            if (data.length) {
                setcountries(data)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getStates = async (countryId) => {
        try {
            const { data } = await axios.post(
                `${serverHost}/api/get_states`,
                { id: countryId }
            );
            setstates(data)
        } catch (error) {
            console.error(error);
        }
    }

    const getLocalGovts = async (localGovtId) => {
        try {
            const { data } = await axios.post(
                `${serverHost}/api/get_localGovts`,
                { id: localGovtId }
            );
            setlocalGovts(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AllContext.Provider
            value={{
                language, setlanguage, langCode, putLangToStorage, getLangFromStorage,
                authUser, getauthUser, countries, states, localGovts,
                getCountries, getStates, getLocalGovts,
            }}
        >
            {props.children}
        </AllContext.Provider>
    );
};

export default AllProvider;