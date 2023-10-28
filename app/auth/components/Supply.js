import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { Link, useRouter } from 'expo-router';
import GlobalStyle from '../../../styles/GlobalStyle';

const Supply = () => {
    const theme = useTheme()
    const router = useRouter()

    return (
        <View style={{ width: "100%" }}>
            <LinearGradient
                colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                style={{ padding: 10 }}
            >
                <Text style={{ color: theme.color }}>Supply</Text>
            </LinearGradient>
            <View style={[styles.menuOne, { columnGap: 5 }]}>
                {/* flex 1 to all flex elements gives each equal width */}
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.backgroundColor }
                    ]}
                    onPress={() => router.push('../auth/supplies')}
                >
                    <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                        <MaterialCommunityIcons name="truck-plus" size={20} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>New supply</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.backgroundColor }
                    ]}
                    onPress={() => router.push('../auth/supplies')}
                >
                    <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                        <FontAwesome name="list-ol" size={20} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Records</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.backgroundColor }
                    ]}
                    onPress={() => router.push('../auth/supplies')}
                >
                    <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                        <MaterialCommunityIcons name="truck-delivery" size={24} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>New supplier</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.backgroundColor }
                    ]}
                    onPress={() => router.push('../auth/supplies')}
                >
                    <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                        <MaterialCommunityIcons name="truck-check" size={24} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>See suppliers</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Supply

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        columnGap: 30,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
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