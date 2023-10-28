import React from 'react';
import { SafeAreaView, View, Platform, StatusBar, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';
import Footer from '../app/auth/components/Footer';

const CrossView = ({ children, showFooter }) => {
    const theme = useTheme();

    return (
        <>
            {Platform.OS === 'ios' ?
                <SafeAreaView style={styles.container(theme)}>
                    <View style={styles.container(theme)}>
                        {children}
                        {showFooter ?
                            <Footer />
                            : <></>}
                    </View>
                </SafeAreaView>
                :
                <View style={[styles.container(theme), stylesAndroid.container]}>
                    {children}
                    {showFooter ?
                        <Footer />
                        : <></>}
                </View>
            }
        </>
    );
};

export default CrossView;
const styles = StyleSheet.create({
    container: (theme) => {
        return {
            flex: 1,
            backgroundColor: theme.backgroundColor
        };
    },
});
const stylesAndroid = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    },
});