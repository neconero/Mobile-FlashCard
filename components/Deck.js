import React from 'react'
import { Text, View } from 'react-native'

export default function Deck(props) {
    const {title, cardCount} = props

    return(
        <View style={{flex: 1, padding: 70}}>
            <Text>{title}</Text>
            <Text>{cardCount}</Text>
        </View>
    )
}