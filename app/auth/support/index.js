import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CrossView from '../../../reusables/CrossView'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../../hooks/useTheme'

const Index = () => {
    const theme = useTheme();

    return (
        <CrossView showFooter>
            <StatusBar
                animated={true}
                backgroundColor={"white"}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'SUPPORT',
                }} />
            <ScrollView
                contentContainerStyle={[styles.scrollView, { backgroundColor: theme.listBgc }]}
                // StickyHeaderComponent={ () => { } }
                stickyHeaderIndices={[0]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >

                <Text>Write SUPPORT ticket here</Text>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        gap: 10,
    },
})