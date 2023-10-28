import React from 'react';
import { Slot, Stack } from 'expo-router';
import useTheme from '../../hooks/useTheme';

export default () => {
    const theme = useTheme()
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <Stack
            screenOptions={{
                headerTintColor: "whitesmoke",
                headerMode: 'float',
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: theme.stackHeaderBgc,
                    height: 50,
                },
                transitionSpec: {
                    open: config,
                    close: config,
                }
            }}
        />
        // <>
        //     <Slot />
        //     <View><Text st>Holla Dear</Text></View>
        // </>
    );
};


