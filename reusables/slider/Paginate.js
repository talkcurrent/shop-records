import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Paginate = ({ data, slideX }) => {
    return (
        <View style={ styles.container }>
            {data.map((val, key) => {
                const inputRange = [(key - 1) * width, key * width, (key + 1) * width];
                const dotWidth = slideX.interpolate({
                    inputRange,
                    outputRange: [12, 20, 12],
                    extrapolate: 'clamp'
                });

                const activeBgc = slideX.interpolate({
                    inputRange,
                    outputRange: ["transparent", "#3c7a3d", "transparent"],
                    extrapolate: 'clamp'
                });

                return <Animated.View
                    key={ key }
                    style={ [
                        styles.page,
                        { width: dotWidth, backgroundColor: activeBgc },
                    ] }
                    animatedValueX={ slideX }
                />;
            }) }
        </View>
    );
};

export default Paginate;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    page: {
        height: 12,
        width: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#8bc23c',
        marginHorizontal: 3,
    },
    active: {
        backgroundColor: "#3c7a3d"
    }
});
