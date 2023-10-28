import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useContext, useEffect } from 'react'
import CrossView from '../../reusables/CrossView'
import { Link, Stack } from 'expo-router'
import useTheme from '../../hooks/useTheme'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AllContext } from '../components/contexts/AllPurposeContext'
import { Api } from '../components/network/api'
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../../reusables/buttons/SearchBar'
import Supply from './components/Supply'
import ShortCuts from './components/ShortCuts'
import Customer from './components/Customer'
import Delivery from './components/Delivery'
import Product from './components/Product'

export default function index(props) {
    const theme = useTheme()
    const { getauthUser, authUser } = useContext(AllContext);
    const { width, height } = Dimensions.get('screen');
    const { serverHost, clientHost } = Api();

    useEffect(() => {
        getauthUser(`${clientHost}/auth`)
        return () => { }
    }, [])

    return (
        <CrossView showFooter>
            <Stack.Screen
                options={{
                    headerShown: false
                }} />
            {/* element at index 0 would have a sticky position */}
            {!authUser ?
                <View style={{ flex: 1, paddingTop: 20, alignContent: 'center', justifyContent: "center" }}>
                    <ActivityIndicator />
                </View>
                :
                <>

                    <View style={[styles.dashboardHead, { backgroundColor: theme.backgroundColor }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8 }}>
                            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                                <Text style={{ color: theme.success, fontSize: 22, fontFamily: "serif-bold" }}>STORE NAME</Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                                <FontAwesome name="bell" size={30} color={theme.color} />
                            </View>
                        </View>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={[theme.backgroundColor, theme.cardGradient]}
                            style={{ paddingHorizontal: 8, paddingBottom: 8 }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <View><Text style={{ color: theme.color, fontWeight: 700 }}>Near Expiration: {50}</Text></View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View><Text style={{ color: theme.color, fontWeight: 700 }}>Expired Products: {0}</Text></View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View><Text style={{ color: theme.color, fontWeight: 700 }}>Low Stock: {30}</Text></View>
                            </View>
                        </LinearGradient>
                    </View>
                    <ScrollView
                        contentContainerStyle={[styles.scrollView, { backgroundColor: theme.listBgc }]}
                        // StickyHeaderComponent={ () => { } }
                        stickyHeaderIndices={[0]}
                        onScroll={() => { }}
                        scrollEventThrottle={1}
                    >
                        <View style={{ paddingVertical: 10, marginHorizontal: 5 }}>
                            <SearchBar
                                value={""}
                                onChangeText={() => { }}
                                iconSize={25}
                                placeholder={"Search products..."}
                            />
                        </View>
                        {/* 1st set of icons */}
                        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                            <View style={[
                                styles.menuCard, {
                                    backgroundColor: theme.backgroundColor,
                                    width: '63%'
                                }
                            ]}>
                                <LinearGradient
                                    colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                                    style={{ padding: 10 }}
                                >
                                    <Text style={{ color: theme.color }}>Store Links</Text>
                                </LinearGradient>
                                <View style={styles.menuOne}>
                                    <Link href={"../auth/stores"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <MaterialCommunityIcons name="store-plus" size={29} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>New store</Text>
                                        </View>
                                    </Link>
                                    <Link href={"../auth/stores"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <MaterialCommunityIcons name="store-cog" size={29} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Manage</Text>
                                        </View>
                                    </Link>
                                    <Link href={"../auth/stores"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <FontAwesome5 name="users" size={29} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Staff</Text>
                                        </View>
                                    </Link>
                                </View>
                            </View>
                            <View style={[
                                styles.menuCard, {
                                    backgroundColor: theme.backgroundColor,
                                    width: '33%'
                                }
                            ]}>
                                <LinearGradient
                                    colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                                    style={{ padding: 10 }}
                                >
                                    <Text style={{ color: theme.color }}>Expenses</Text>
                                </LinearGradient>
                                <View style={[styles.menuOne, { columnGap: 0 }]}>
                                    <Link href={"../auth/expenses"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <MaterialCommunityIcons name="file-document-edit" size={24} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Add</Text>
                                        </View>
                                    </Link>
                                    <Link href={"../auth/expenses"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <Fontisto name="preview" size={24} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>See</Text>
                                        </View>
                                    </Link>
                                </View>
                            </View>
                        </View>
                        {/* 2st set of icons */}
                        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                            <Product />
                            <View style={[
                                styles.menuCard, {
                                    backgroundColor: theme.backgroundColor,
                                    width: '63%'
                                }
                            ]}>
                                <LinearGradient
                                    colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                                    style={{ padding: 10 }}
                                >
                                    <Text style={{ color: theme.color }}>Sales</Text>
                                </LinearGradient>
                                <View style={[styles.menuOne, { columnGap: 0 }]}>
                                    <Link href={"/"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <FontAwesome5 name="plus" size={20} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>New sale</Text>
                                        </View>
                                    </Link>
                                    <Link href={"/"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <FontAwesome name="list-ol" size={20} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Sales record</Text>
                                        </View>
                                    </Link>
                                    <Link href={"../auth/sales"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <FontAwesome5 name="hand-holding-usd" size={20} color={theme.iconColor} />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Owings</Text>
                                        </View>
                                    </Link>
                                </View>
                            </View>
                        </View>
                        <Customer />
                        <Supply />
                        <ShortCuts />
                        <Delivery />
                    </ScrollView>
                </>
            }
        </CrossView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        gap: 10,
    },
    scrollViewFooter: {
        flex: 1,
        gap: 10,
        justifyContent: "space-evenly",
        paddingVertical: 5,
    },
    dashboardHead: {
        flexGrow: "auto",
    },
    dashboardBody: {
        flexGrow: 1,
    },
    dashboardFooter: {
        flexGrow: "auto",
        borderTopColor: '#dadada',
        borderTopWidth: 1,
    },
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    fullRow: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    halfRow: {
        justifyContent: "flex-start",
        justifyItems: "center",
        padding: 10,
        columnGap: 30,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    menuCard: {
        // marginTop: 10,
        marginBottom: 10,
        width: "97%",
        borderRadius: 10,
        // borderWidth: 1,
        shadowColor: "black",
        // overflow hidden wont make shadow work on ios 
        // overflow: "hidden",
        alignSelf: "center",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
    munuIcon: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        borderBottomStartRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        padding: 5,
    },
})