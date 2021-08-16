import React, { Component} from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {Card} from 'react-native-paper'
import {handleInitialData} from '../actions'
import {connect} from 'react-redux'
import Deck from './Deck'
import {lavender, black, orange} from '../utils/colours'


const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: lavender,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20,
        color: black,
    },
    card: {
        margin: 10,
        backgroundColor: orange,
        borderRadius: 15
    }
})

export class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        const {decks, navigation} = this.props

        return (
            <View style={styles.scrollContainer}>
                <Text style={styles.title}>Flashcards</Text>
                <ScrollView> 
                    {decks && Object.keys(decks).map((deck) => {
                        const {title, questions} = decks[deck]
                        
                        return (
                                <TouchableOpacity 
                                    key={deck}
                                    onPress={ () => {
                                        navigation.navigate('DeckView', {title: deck})
                                    }}
                                >
                                    <Card style={styles.card}>
                                        <Deck 
                                            title={title}
                                            cardCount={questions ? questions.length : 0}
                                        />
                                    </Card>
                                </TouchableOpacity>
                            
                        )
                    })}
                </ScrollView> 
            </View>
        )
    }
}

function mapStateToProps(state){
    
    return{
        decks: state.decks,
    }
}

export default connect(mapStateToProps)(DeckList) 