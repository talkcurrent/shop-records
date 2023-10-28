import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import CrossView from '../../reusables/CrossView';
import Logo from '../../reusables/Logo';
import Carousel from '../../reusables/slider/Carousel';
import { Link, Stack, useRouter } from 'expo-router';
import useTheme from '../../hooks/useTheme';
import { FontAwesome5 } from '@expo/vector-icons';
import SelectBtn from '../../reusables/SelectBtn';
import Translate from '../../reusables/Translate';
import { AllContext } from '../components/contexts/AllPurposeContext';
//device width and height
const { width, height } = Dimensions.get('screen');


const Index = () => {
    const {
        language, langCode, setlanguage
    } = useContext(AllContext);

    const router = useRouter()
    const theme = useTheme()

    const images = [
        { id: 0, image_name: require("../../assets/files/carousel/shopcategories.jpg"), title: "", description: Translate("sliderTextOne", langCode) },
        { id: 1, image_name: require("../../assets/files/carousel/eyeonstore.png"), title: "", description: Translate("sliderTextTwo", langCode) },
        { id: 2, image_name: require("../../assets/files/carousel/training.png"), title: "", description: Translate("sliderTextThree", langCode) },
        { id: 3, image_name: require("../../assets/files/carousel/multipleshops.jpg"), title: "", description: Translate("sliderTextFour", langCode) },
    ];
    return (
        langCode ?
            <CrossView>
                <StatusBar
                    animated={true}
                    backgroundColor={"white"}
                />
                <View style={styles.scrollView}>
                    <Stack.Screen options={{
                        headerShown: false,
                    }} />
                    <View >
                        <Logo
                            componentStyle={styles.logo}
                            withText={false}
                        />
                        <View style={{ justifyContent: "center", width: 100, alignSelf: "flex-end", }}>
                            <SelectBtn
                                value={language}
                                text={language}
                                style={styles.langBtn}
                                handleInputChange={(value) => setlanguage(value)}
                                iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.color} />}
                                items={['Arabic', 'English', 'French', 'Hausa', 'Igbo', 'Yoruba',]}
                            />
                        </View>
                    </View>

                    <View style={styles.banner}>
                        <Carousel data={images} />
                    </View>

                    <View style={styles.btnGrid}>
                        <Pressable style={styles.btn} >
                            <TouchableOpacity style={[styles.pressable, styles.register]}>
                                <Text onPress={() => router.push("/guest/Register")} style={styles.registerText}>{Translate("register", langCode)}</Text>
                            </TouchableOpacity>
                        </Pressable>

                        <Pressable style={styles.btn} >
                            <TouchableOpacity style={[styles.pressable, styles.login]}>
                                <Link href={"/guest/Login"} style={styles.loginText}>{Translate("login", langCode)}</Link>
                            </TouchableOpacity>
                        </Pressable>
                    </View>
                </View>
            </CrossView>
            : ""
    );
};

export default Index;
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    logo: {
        color: "black",
        fontSize: 40,
        fontWeight: '800',
    },
    banner: {
        flexFlow: "column",
        flexGrow: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    btnGrid: {
        flexDirection: "row",
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    btn: {
        margin: 5,
        flex: 1,
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    pressable: {
        borderRadius: 5,
    },
    register: {
        backgroundColor: "transparent",
        borderColor: "#8bc23c",
        borderWidth: 1,
    },
    login: {
        backgroundColor: "#3c7a3d",
    },
    registerText: {
        padding: 8,
        color: "#8bc23c",
        fontWeight: '600',
    },
    loginText: {
        padding: 8,
        color: "whitesmoke",
    },
});