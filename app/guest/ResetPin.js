import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CrossView from '../../reusables/CrossView'
import useTheme from '../../hooks/useTheme'

const ResetPin = (props) => {
    const theme = useTheme()
    return (
        <CrossView>
            <View style={styles.container}>
                <Text style={{ color: theme.color }}>Reset Pin</Text>
            </View>
        </CrossView>
    )
}

export default ResetPin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})