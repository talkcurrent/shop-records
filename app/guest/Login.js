import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import CrossView from '../../reusables/CrossView';
import { Link, Redirect, Stack, useRouter } from 'expo-router';
import Logo from '../../reusables/app/Logo';
import Translate from '../../reusables/Translate';
import { AllContext } from '../components/contexts/AllPurposeContext';
import useTheme from '../../hooks/useTheme';
import CustomTextInput from '../../reusables/form/CustomTextInput';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyle from '../../styles/GlobalStyle';
import { Api } from '../components/network/api';
import axios from 'axios';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from "react-native";

const Login = () => {
    const theme = useTheme();
    const router = useRouter()
    const { langCode } = useContext(AllContext);

    const [form, setform] = useState({
        password: "", phoneNumber: "",
        // email: "", remember: false
    });
    const [proccessing, setproccessing] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const handleInputChange = (value, key) => {
        setform(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleLogin = async () => {
        const { serverHost, clientHost } = Api();
        const error = Object.values(form).some(o => {
            return (o.length ? o.trim() : o) == ""
        });
        seterrorMsg('')
        if (!error) {
            setproccessing(true)
            try {
                const deviceName = Device.deviceName ? Device.deviceName : Device.osName;

                // const { data } = await axios.post(
                //     `${serverHost}/api/login`,
                //     {
                //         phoneNumber: form.phoneNumber,
                //         password: form.password,
                //         device_name: deviceName
                //     }
                // );
                setproccessing(false);
                // let prevScreen;
                // if (Platform.OS === 'web') {
                //     await AsyncStorage.setItem('AccessToken', data);
                //     prevScreen = await AsyncStorage.getItem('prevPath');
                // } else {
                //     await SecureStore.setItemAsync('AccessToken', data);
                //     prevScreen = await SecureStore.getItemAsync('prevPath');
                // }

                // if (prevScreen?.length) {
                //     router.replace(prevScreen);
                // } else {
                router.replace(`../auth`);
                // }
                // if (Platform.OS === 'web') {
                //     await AsyncStorage.removeItem('prevPath');
                // } else {
                //     await SecureStore.deleteItemAsync('prevPath');
                // }

            } catch (err) {
                seterrorMsg(err.response.data.message);
                setproccessing(false);
            }
        }
    }

    return (
        <CrossView>
            <Stack.Screen
                options={{
                    headerShown: false
                }} />
            <ScrollView
                style={styles.scrollView}
                // StickyHeaderComponent={ () => { } }
                stickyHeaderIndices={[0]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <View
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
                        <Text
                            style={{
                                fontWeight: 900,
                                color: theme.success,
                                fontSize: 40,
                                fontFamily: 'serif-bold',
                            }}
                        >Shop Records</Text>
                    </View>
                    <Logo styleProp={{
                        height: 160,
                    }} />
                </View>
                <View style={{
                    // flexDirection: "row",
                    marginTop: 30,
                    paddingRight: 10,
                    paddingLeft: 10,
                    gap: 5,
                }}>
                    {/* <CustomTextInput
                        style={styles.input}
                        label={Translate("e-mail", langCode)}
                        name='email'
                        value={form['email']}
                        inputMode={"email"}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                    /> */}
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
                        label={Translate("password", langCode)}
                        name='password'
                        value={form['password']}
                        inputMode={"numeric"}
                        maxLength={6}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome5 name={"lock"} size={24} color={theme.grayed} />}
                    />
                    {errorMsg.length ?
                        <View>
                            <Text style={{ color: theme.error }}>{errorMsg}</Text>
                        </View>
                        : <></>}
                    <View style={[GlobalStyle.btnGrid, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View>
                            {/* <Checkbox
                                value={form['remember']}
                                name={"remember"}
                                handleInputChange={handleInputChange}
                            >
                                <Text style={{ color: theme.color }}>{Translate("Remember me", langCode)}</Text>
                            </Checkbox> */}
                        </View>
                        <Pressable style={[GlobalStyle.btn]} >
                            <TouchableOpacity style={[GlobalStyle.btnPrimary]}>
                                <Text
                                    onPress={proccessing ? () => { } : handleLogin}
                                    style={[GlobalStyle.btnPrimary.text, { minWidth: 100, textAlign: "center" }]}
                                >{proccessing ? `${Translate("please", langCode)} ${Translate("wait", langCode)}...` : Translate("login", langCode)}</Text>
                            </TouchableOpacity>
                        </Pressable>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text
                            style={{ fontSize: 20, color: theme.color }}
                        >{Translate("forgot password", langCode)}? <Link href={"/guest/ResetPin"} style={{ color: theme.linkColor }}>{Translate("get new password", langCode)}</Link></Text>
                    </View>
                </View>
            </ScrollView>
            {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: theme.grayed }}>ShopRecord version 1.0</Text>
            </View> */}
        </CrossView>
    );
};

export default Login;
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
        gap: 10,
    },
});