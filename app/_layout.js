import { Slot } from 'expo-router';
import React from 'react';
import { AllProvider } from './components/contexts/AllPurposeContext';
import { StatusBar } from 'react-native';
import useTheme from '../hooks/useTheme';
import { useFonts } from 'expo-font';

export default function _layout() {
    const theme = useTheme()
    const [fontsLoaded] = useFonts({
        'serif-bold': require('../assets/fonts/serif-bold.ttf'),
    });
    return (
        <AllProvider>
            <StatusBar
                animated={true}
                barStyle={theme.barStyle}
            />
            <Slot />
        </AllProvider>
    );
}
