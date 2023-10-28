import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme';
import { Link } from 'expo-router';

const ShortCuts = () => {
    const theme = useTheme()

    return (
        <View style={[
            styles.menuCard,
            {
                // borderColor: theme.hr,
                backgroundColor: theme.backgroundColor,
            }
        ]}>
            <LinearGradient
                colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                style={{ padding: 10 }}
            >
                <Text style={{ color: theme.color }}>Shortcuts</Text>
            </LinearGradient>
            {/* Row one  */}
            <View style={styles.fullRow}>
                <Link href={"../auth/profile"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome name="user-circle" size={40} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Profile</Text>
                    </View>
                </Link>
                <Link href={"../auth/statistics"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <Ionicons name="stats-chart" size={35} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Statistics</Text>
                    </View>
                </Link>
                <Link href={"../auth/reward"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome name="money" size={40} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Reward</Text>
                    </View>
                </Link>
                <Link href={"../auth/customers"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <MaterialCommunityIcons name="contacts" size={40} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Customers</Text>
                    </View>
                </Link>
                <Link href={"../auth/support"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <AntDesign name="customerservice" size={37} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Support</Text>
                    </View>
                </Link>
            </View>
            {/* Row two */}
            <View style={styles.halfRow}>
                <Link href={"../auth/settings"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome5 name="cog" size={40} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Settings</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

export default ShortCuts

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        // columnGap: 30,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    fullRow: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        // columnGap: 30,
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