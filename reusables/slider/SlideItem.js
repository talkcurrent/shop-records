import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import useTheme from '../../hooks/useTheme';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const theme = useTheme();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <View style={ styles.container }>
            <Animated.Image
                source={ item.image_name }
                style={ {
                    ...styles.carouselImg,
                    // opacity: fadeAnim,
                } }
                resizeMode={ "cover" }
            />
            <Text style={ [styles.carouselText, { color: theme.color }] }>{ item.description }</Text>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: height / 2,
        alignItems: "center",
        alignContent: "center",
    },
    carouselImg: {
        flex: 8,
        width: "100%",
    },
    carouselText: {
        flex: 2,
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
    },
});
