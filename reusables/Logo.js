import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Logo = ({ componentStyle, withText }) => {

    return (
        <View style={ styles.container }>
            {withText != false &&
                <Text style={ { ...styles.logoText, ...componentStyle } }>My Total Shop</Text>
            }
            <Image
                source={ require("../assets/files/completelogo.png") }
                style={ styles.logoImage }
            />
        </View>
    );
};

export default Logo;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    logoText: {
        flex: 1,
        textAlign: "center",
    },
    logoImage: {
        height: 100,
        width: 100,
        objectFit: "contain",
        resizeMode: 'contain'
    },
});