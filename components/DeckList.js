import React, { Component} from 'react'
import { View, TouchableOpacity} from 'react-native'
import {handleInitialData} from '../actions'
import {connect} from 'react-redux'
import Deck from './Deck'

export class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        const {decks, navigation} = this.props

        return (
            <View>
                {decks && Object.keys(decks).map((deck) => {
                    const {title, questions} = decks[deck]
                    //console.log(title)
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