import React from 'react';
import { View, Text } from 'react-native';

export default function Divider({ color, scale = 0.4 }) {
    return <View style={ { height: 1.5, backgroundColor: color, transform: [{ scaleY: scale }] } } />;
}
