import React, { Component} from 'react'
import { ScrollView, TouchableOpacity, Text} from 'react-native'
import {handleInitialData} from '../actions'
import {connect} from 'react-redux'
import Deck from './Deck'
import {appStyles} from '../utils/colours'

export class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        const {decks, navigation} = this.props

        return (
            <ScrollView style={appStyles.scrollContainer}>
                <Text style={appStyles.title}>Flashcards</Text>
                {decks && Object.keys(decks).map((deck) => {
                    const {title, questions} = decks[deck]
                    
                    return (
                        
                            <TouchableOpacity 
                                key={deck}
                                onPress={ () => {
                                    navigation.navigate('DeckView', {title: deck})
                                }}
                            >
                                <Deck 
                                    title={title}
                                    cardCount={questions ? questions.length : 0}
                                />
                            </TouchableOpacity>
                         
                    )
                })}
            </ScrollView> 
        )
    }
}

function mapStateToProps(state){
    
    return{
        decks: state.decks,
    }
}

export default connect(mapStateToProps)(DeckList) 