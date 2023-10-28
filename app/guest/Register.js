import { Link, Stack, useRouter } from 'expo-router';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { Animated, View, Text, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Brand from '../../reusables/app/Brand';
import Logo from '../../reusables/app/Logo';
import BtnSolidSuccess from '../../reusables/buttons/BtnSolidSuccess';
import CrossView from '../../reusables/CrossView';
import GlobalStyle from '../../styles/GlobalStyle';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import SelectInput from '../../reusables/form/SelectInput';
import CustomTextInput from '../../reusables/form/CustomTextInput';
import Checkbox from '../../reusables/form/Checkbox';
import { AllContext } from '../components/contexts/AllPurposeContext';
import Translate from '../../reusables/Translate';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';
import customFetch from '../components/request/customFetch';
import { Api } from '../components/network/api';
import axios from 'axios';

const Register = () => {
    const theme = useTheme();
    const router = useRouter()
    const {
        langCode, getCountries, getStates, getLocalGovts,
        countries, states, localGovts
    } = useContext(AllContext);

    const [securePIN, setsecurePIN] = useState(false);
    const [registering, setregistering] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');

    const [form, setform] = useState({
        firstName: "", lastName: "", otherName: "", email: "",
        phoneNumber: "", storeName: "", storeCategory: "", pin: "",
        country: "", state: "", city: "", area: "", currency: "Naira",
        termsAgreed: false,
    });

    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        if (countries.length) {
            var country = countries.find((c, index) => c.name == form.country);
            country ? getStates(country.id) : "";
        }
    }, [form.country])

    useEffect(() => {
        if (states.length) {
            var state = states.find((s, index) => s.name == form.state);
            state ? getLocalGovts(state.id) : "";
        }

    }, [form.state])


    const scrollY = useRef(new Animated.Value(0)).current;

    const handleInputChange = (value, key) => {
        setform(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleOnScroll = (event) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            y: scrollY,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false
            },
        )(event);
    };

    const handleSecurePIN = () => {
        setsecurePIN(!securePIN);
    };

    const handleSignUp = async () => {
        if (form.termsAgreed) {
            // const error = Object.values(form).some(o => {
            //     return (o.length ? o.trim() : o) == ""
            // });

            let err = false;

            for (const key in form) {
                if (Object.hasOwnProperty.call(form, key)) {
                    if (key == 'otherName') continue; //skip
                    const value = form[key].length ? form[key].trim() : form[key];
                    if (value == "") {
                        err = true
                        break
                    }
                }
            }
            if (!err) {
                setregistering(true)
                seterrorMsg("")
                const deviceName = Device.deviceName;
                var country = countries.find((c, index) => c.name == form.country);
                var state = states.find((s, index) => s.name == form.state);
                var lga = localGovts.find((l, index) => l.name == form.city);

                const params = {
                    firstName: form.firstName, lastName: form.lastName,
                    otherName: form.otherName, email: form.email.toLowerCase(),
                    phoneNumber: form.phoneNumber, storeName: form.storeName,
                    storeCategory: form.storeCategory, pin: form.pin,
                    country: country.id, state: state.id, city: lga.id, area: form.area,
                    currency: form.currency, device_name: deviceName ? deviceName : "web",
                };
                const { serverHost } = Api();
                const response = await customFetch(
                    `${serverHost}/api/register`,
                    'POST',
                    JSON.stringify(params),
                )
                if (response.ok) {
                    let result = await response.text();

                    if (Platform.OS === 'web') {
                        await AsyncStorage.setItem('AccessToken', result);
                    } else {
                        SecureStore.setItemAsync('AccessToken', result);
                    }
                    router.replace('./Login');
                } else {
                    seterrorMsg('Something went wrong. Please try again.')
                }
                setregistering(false)
            } else {
                seterrorMsg('Some fields are still empty!')
            }
        } else {
            seterrorMsg('Please accept our terms and condition to proceed')
        }
    }

    return (
        <CrossView>
            <Stack.Screen
                options={{
                    headerShown: false
                }} />
            {/* <StatusBar
        animated={true}
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle={"light-content"}
        showHideTransition={statusBarTransition}
        hidden={false}
      /> */}
            <ScrollView
                style={styles.scrollView}
                // StickyHeaderComponent={ () => { } }
                stickyHeaderIndices={[0]}
                onScroll={handleOnScroll}
                scrollEventThrottle={1}
            >
                <Animated.View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme.backgroundColor
                    }}
                >
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // transform: [{
                        //     scale: scrollY.interpolate({
                        //         inputRange: [0, 40],
                        //         outputRange: [1, 0],  // 0 : 150, 0.5 : 75, 1 : 0
                        //         extrapolate: 'clamp'
                        //     }),
                        // }],
                    }} >
                        <Animated.Text
                            style={{
                                fontWeight: 900,
                                color: theme.color,
                                fontSize: scrollY.interpolate({
                                    inputRange: [0, 30],
                                    outputRange: [30, 0],
                                    extrapolate: 'clamp'
                                }),


                            }}
                        >Shop Records</Animated.Text>
                    </View>
                    <Logo styleProp={{
                        height: 80,
                    }} />
                    <View style={{
                        flexDirection: "row", gap: 4,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text style={{ color: theme.color }}>{Translate("already have an account?", langCode)}</Text>
                        <TouchableOpacity style={{}}>
                            <Link
                                style={{ color: theme.linkColor, fontWeight: 900 }}
                                href={'./Login'}
                            >{Translate("login", langCode)}</Link>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <View style={{
                    marginTop: 10,
                    paddingRight: 10,
                    paddingLeft: 10,
                    gap: 5,
                }}>
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("first name", langCode)}
                        name='firstName'
                        value={form['firstName']}
                        inputMode={"text"}
                        handleInputChange={handleInputChange}
                        placeholder="Enter your first name..."
                        iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        style={styles.input}
                        value={form['lastName']}
                        label={Translate("last name", langCode)}
                        name='lastName'
                        inputMode={"text"}
                        handleInputChange={handleInputChange}
                        placeholder="Enter your last name..."
                        iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                    />

                    <CustomTextInput
                        style={styles.input}
                        value={form['otherName']}
                        label={`${Translate("other name", langCode)} (${Translate("optional", langCode)})`}
                        name='otherName'
                        inputMode={"text"}
                        handleInputChange={handleInputChange}
                        placeholder="Enter any other name..."
                        iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        style={styles.input}
                        value={form['phoneNumber']}
                        label={Translate("phone number", langCode)}
                        name='phoneNumber'
                        inputMode={"tel"}
                        handleInputChange={handleInputChange}
                        placeholder="E.g 09066000000"
                        maxLength={10}
                        iconLeft={
                            <>
                                <FontAwesome5 name={"phone-alt"} size={24} color={theme.grayed} />
                                <View><Text style={{ color: theme.grayed, fontWeight: 800 }}>+234</Text></View>
                            </>
                        }
                    />
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("e-mail", langCode)}
                        value={form['email']}
                        name='email'
                        inputMode={"email"}
                        placeholder={"E.g myemail@example.com"}
                        iconLeft={<FontAwesome5 name={"envelope"} size={24} color={theme.grayed} />}
                        handleInputChange={handleInputChange}
                    />
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("secret pin", langCode)}
                        value={form['pin']}
                        name='pin'
                        inputMode={"numeric"}
                        secureTextEntry={securePIN}
                        maxLength={6}
                        placeholder={"Create you 6-digit PIN"}
                        iconLeft={<FontAwesome5 name={"lock"} size={24} color={theme.grayed} />}
                        iconRight={
                            securePIN ?
                                <FontAwesome5 name={"eye-slash"} size={20} color={theme.grayed} />
                                :
                                <FontAwesome5 name={"eye"} size={20} color={theme.grayed} />
                        }
                        onIconRightPress={handleSecurePIN}
                        handleInputChange={handleInputChange}
                    />
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("store or business name", langCode)}
                        value={form['storeName']}
                        name='storeName'
                        inputMode={"text"}
                        placeholder={"Enter your business name..."}
                        iconLeft={<FontAwesome5 name={"store-alt"} size={22} color={theme.grayed} />}
                        handleInputChange={handleInputChange}
                    />
                    <SelectInput
                        label={Translate("store type", langCode)}
                        value={form['storeCategory']}
                        name='storeCategory'
                        style={styles.input}
                        handleInputChange={handleInputChange}
                        iconLeft={<MaterialIcons name={"category"} size={26} color={theme.grayed} />}
                        iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.grayed} />}
                        items={[
                            'Fasion & beauty', 'Provision & beverages', 'Automobile', 'Phamaceutical',
                        ]}
                    />
                    <SelectInput
                        label={Translate("country", langCode)}
                        value={form['country']}
                        name='country'
                        style={styles.input}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome name={"flag"} size={24} color={theme.grayed} />}
                        iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.grayed} />}
                        items={countries.map(country => country.name)}
                    />
                    <SelectInput
                        label={Translate("state", langCode)}
                        value={form['state']}
                        name='state'
                        style={styles.input}
                        handleInputChange={handleInputChange}
                        iconLeft={<MaterialIcons name={"location-pin"} size={26} color={theme.grayed} />}
                        iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.grayed} />}
                        items={states.map(s => s.name)}
                    />
                    <SelectInput
                        label={Translate("city", langCode)}
                        value={form['city']}
                        name='city'
                        style={styles.input}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome5 name={"city"} size={20} color={theme.grayed} />}
                        iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.grayed} />}
                        items={localGovts.map(l => l.name)}
                    />
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("area", langCode)}
                        value={form['area']}
                        name='area'
                        inputMode={"text"}
                        placeholder={"E.g Garki, Lekki, Ankpa e.t.c"}
                        iconLeft={<FontAwesome5 name={"city"} size={22} color={theme.grayed} />}
                        handleInputChange={handleInputChange}
                    />
                    <SelectInput
                        label={Translate("currency", langCode)}
                        value={form['currency']}
                        name='currency'
                        style={styles.input}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome5 name={"money-bill-alt"} size={20} color={theme.grayed} />}
                        iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.grayed} />}
                        items={['Naira']}
                    />
                    <Checkbox
                        value={form['termsAgreed']}
                        name={"termsAgreed"}
                        handleInputChange={handleInputChange}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{ color: theme.color }}
                            >{Translate("i have read the", langCode)} </Text>
                            <Pressable>
                                <Link
                                    style={{ color: theme.linkColor, fontWeight: 800 }}
                                    href={'../TermsNConditions'}
                                >{Translate("terms and conditions", langCode)}</Link>
                            </Pressable>
                        </View>
                    </Checkbox>
                    {errorMsg.length ?
                        <View><Text style={{ color: '#e54d4d' }}>{errorMsg}</Text></View>
                        : ""}
                </View>
                <View style={[GlobalStyle.btnGrid, styles.buttons, { marginTop: 10 }]}>
                    <BtnSolidSuccess>
                        <Text
                            onPress={registering ? '' : handleSignUp}
                            style={{
                                color: "whitesmoke",
                                fontWeight: '600',
                                textAlign: "center"
                            }}>{registering ? `${Translate("please", langCode)} ${Translate("wait", langCode)}...` : Translate("sign up", langCode)}</Text>
                    </BtnSolidSuccess>
                </View>
            </ScrollView>
        </CrossView>
    );
};

export default Register;
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
        gap: 10,
    },
    buttons: {
        // flexGrow: ,
    },
    input: {
        // height: 40,
        paddingLeft: 10,
        marginLeft: 0,
    },
});