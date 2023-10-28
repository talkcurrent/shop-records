import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import useTheme from '../../../hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import GlobalStyle from '../../../styles/GlobalStyle';

const Product = () => {
    const theme = useTheme();

    return (
        <View style={[
            GlobalStyle.shadow, {
                backgroundColor: theme.backgroundColor,
                width: '33%'
            }
        ]}>
            <LinearGradient
                colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                style={{ padding: 10 }}
            >
                <Text style={{ color: theme.color }}>Product</Text>
            </LinearGradient>
            <View style={[styles.menuOne, { columnGap: 0 }]}>
                <Link href={"../auth/products"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                            <FontAwesome5 name="plus" size={25} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Add</Text>
                    </View>
                </Link>
                <Link href={"../auth/products"}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                            <FontAwesome5 name="product-hunt" size={25} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Manage</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
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