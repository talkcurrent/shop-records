import React, { useState, useEffect, useRef } from 'react';
import { Animated, TextInput, View, Text, Pressable, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Divider from '../Divider';

export default function CustomTextInput(props) {
    const {
        label, value, style, name, inputMode,
        height, handleInputChange, placeholder
    } = props;
    const [focused, setfocused] = useState(false);

    const [labelWidth, setlabelWidth] = useState(0);
    //scaled down to this value during animation
    const [labelScale, setlabelScale] = useState(0.85);
    const [labelOffsetX, setlabelOffsetX] = useState(0);

    const theme = useTheme();

    useEffect(() => {
        if (labelWidth > 0) {
            //offset after scaling
            const labelTextOffesetX = (labelWidth - (labelWidth * labelScale)) / 2;
            setlabelOffsetX(labelTextOffesetX);
        }
    }, [labelWidth, labelScale]);

    const handleInputPress = () => {
        textInputRef.current.focus();
    };
    const handleInputBlur = () => {
        if (!value.length) {
            translateUp();
        }
        setfocused(false);
    };
    const handleInputFocus = () => {
        translateDown();
        setfocused(true);
    };

    const labelAnim = useRef(new Animated.Value(0)).current;
    const textInputRef = useRef(null);

    const translateDown = () => {
        // Will change labelAnim value to 1 in 0.2 seconds
        Animated.timing(labelAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const translateUp = () => {
        Animated.timing(labelAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handleLabelLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setlabelWidth(width);
    };

    const translateX = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -labelOffsetX],
        extrapolate: 'clamp'
    });

    const translateY = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -19],
        extrapolate: 'clamp'
    });
    const scaleLabel = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, labelScale],
        extrapolate: 'clamp'
    });

    return (
        <View>
            <View
                style={[styles.container, { backgroundColor: theme.cardBgc }]}
            >
                {props.iconLeft ?
                    <Pressable style={styles.iconLeft} onPress={handleInputPress}>
                        {props.iconLeft}
                    </Pressable>
                    : <></>}
                <Pressable style={styles.inputParent} onPress={handleInputPress}>
                    <View onLayout={handleLabelLayout}
                        style={{ alignSelf: "flex-start" }}
                    >
                        <Text
                            style={{
                                opacity: 0,
                                transform: [{ scale: labelScale }]
                            }}
                        >{label}</Text>
                    </View>
                    <Animated.View
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            paddingBottom: 3,
                            zIndex: -1,
                            direction: "ltr",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                        }}>
                        <Animated.Text
                            style={{
                                alignSelf: "flex-start",
                                justifyContent: 'flex-start',
                                color: value.length || focused ? theme.grayed : theme.color,
                                opacity: 1,
                                transform: [
                                    { translateX: translateX },
                                    { translateY: translateY },
                                    { scale: scaleLabel }
                                ],
                            }}

                        >{label}</Animated.Text>
                    </Animated.View>
                    <TextInput
                        style={[styles.input, { color: theme.color }]}
                        value={value}
                        inputMode={inputMode}
                        secureTextEntry={props.secureTextEntry}
                        maxLength={props.maxLength}
                        ref={textInputRef}
                        placeholderTextColor={theme.grayed}
                        placeholder={value.length || !focused ? "" : placeholder}
                        onChangeText={(text) => handleInputChange(text, name)}
                        onFocus={() => handleInputFocus()}
                        onBlur={() => handleInputBlur()}
                        enterKeyHint={"next"}
                    />
                </Pressable>
                {props.iconRight ?
                    <Pressable
                        style={styles.iconRight}
                        onPress={props.onIconRightPress ? props.onIconRightPress : () => { }}
                    >
                        {props.iconRight}
                    </Pressable>
                    : <></>}
            </View>
            <Divider color="#a1a1a1" scale={focused ? 1 : 0.4} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: '#f5f5f5',
        gap: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    iconLeft: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 3,
        gap: 2,
    },
    iconRight: {
        flexDirection: 'row',
        alignItems: "flex-end",
        paddingHorizontal: 5,
        // paddingVertical: 3,
        gap: 2,
    },
    inputParent: {
        flex: 8,
        justifyContent: "flex-end",
    },
    input: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        fontSize: 15,
        paddingTop: 5,
        // outlineStyle: "none",
    },
    contentContainer: {
        paddingVertical: 20,
        gap: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});