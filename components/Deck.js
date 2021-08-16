import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
})

export default function Deck(props) {
    const {title, cardCount} = props

    return(
        <View style={{flex: 1, padding: 70, alignSelf: 'center'}}>
            <Text style={styles.text}>{title} deck</Text>
            {cardCount > 1 
                ? <Text style={styles.text}>{cardCount} cards</Text>
                : <Text style={styles.text}>{cardCount} card</Text>
            }
        </View>
    )
}