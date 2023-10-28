import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import useTheme from '../hooks/useTheme';
import CrossView from '../reusables/CrossView';

const TermsNConditions = () => {
    const theme = useTheme();

    return (
        <CrossView>
            <ScrollView
                style={ styles.container }
                showsVerticalScrollIndicator={ false }
            >
                <Text style={ { color: theme.color } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fugit iusto numquam similique? Dolorum nesciunt sint modi recusandae illum similique dolorem voluptatum ut ducimus adipisci dignissimos, neque numquam, aliquam aut. Perspiciatis, dignissimos eveniet? Dolorem numquam unde facilis voluptatum, illum excepturi ex odio laborum veritatis quo atque cupiditate! Vitae laboriosam, quo nostrum porro alias aliquam maxime quis facilis magnam iusto quibusdam autem reprehenderit harum doloribus consequuntur aliquid, repellendus odio, provident beatae amet. Placeat nobis qui, nam magni reprehenderit voluptas quam vel consequatur pariatur necessitatibus culpa corrupti suscipit reiciendis minima nisi? Ducimus perferendis inventore maxime aperiam suscipit velit, officiis architecto soluta cupiditate?</Text>
                <Text style={ { color: theme.color } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fugit iusto numquam similique? Dolorum nesciunt sint modi recusandae illum similique dolorem voluptatum ut ducimus adipisci dignissimos, neque numquam, aliquam aut. Perspiciatis, dignissimos eveniet? Dolorem numquam unde facilis voluptatum, illum excepturi ex odio laborum veritatis quo atque cupiditate! Vitae laboriosam, quo nostrum porro alias aliquam maxime quis facilis magnam iusto quibusdam autem reprehenderit harum doloribus consequuntur aliquid, repellendus odio, provident beatae amet. Placeat nobis qui, nam magni reprehenderit voluptas quam vel consequatur pariatur necessitatibus culpa corrupti suscipit reiciendis minima nisi? Ducimus perferendis inventore maxime aperiam suscipit velit, officiis architecto soluta cupiditate?</Text>
                <Text style={ { color: theme.color } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fugit iusto numquam similique? Dolorum nesciunt sint modi recusandae illum similique dolorem voluptatum ut ducimus adipisci dignissimos, neque numquam, aliquam aut. Perspiciatis, dignissimos eveniet? Dolorem numquam unde facilis voluptatum, illum excepturi ex odio laborum veritatis quo atque cupiditate! Vitae laboriosam, quo nostrum porro alias aliquam maxime quis facilis magnam iusto quibusdam autem reprehenderit harum doloribus consequuntur aliquid, repellendus odio, provident beatae amet. Placeat nobis qui, nam magni reprehenderit voluptas quam vel consequatur pariatur necessitatibus culpa corrupti suscipit reiciendis minima nisi? Ducimus perferendis inventore maxime aperiam suscipit velit, officiis architecto soluta cupiditate?</Text>
                <Text style={ { color: theme.color } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fugit iusto numquam similique? Dolorum nesciunt sint modi recusandae illum similique dolorem voluptatum ut ducimus adipisci dignissimos, neque numquam, aliquam aut. Perspiciatis, dignissimos eveniet? Dolorem numquam unde facilis voluptatum, illum excepturi ex odio laborum veritatis quo atque cupiditate! Vitae laboriosam, quo nostrum porro alias aliquam maxime quis facilis magnam iusto quibusdam autem reprehenderit harum doloribus consequuntur aliquid, repellendus odio, provident beatae amet. Placeat nobis qui, nam magni reprehenderit voluptas quam vel consequatur pariatur necessitatibus culpa corrupti suscipit reiciendis minima nisi? Ducimus perferendis inventore maxime aperiam suscipit velit, officiis architecto soluta cupiditate?</Text>
            </ScrollView>
        </CrossView>
    );
};

export default TermsNConditions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 20,
        textAlign: 'justify'
    }
});
