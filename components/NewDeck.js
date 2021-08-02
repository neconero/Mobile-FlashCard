import React, { Component} from 'react'
import {Text, KeyboardAvoidingView, View} from 'react-native'
import {addDeck} from '../actions/index'
import {addNewDeck} from '../utils/api'
import {connect} from 'react-redux'
import {TextInput, Button} from 'react-native-paper'

class NewDeck extends Component {
    state = {
        deckTitle: ''
    }

    handleInputChange = (deckTitle) => {
        this.setState({deckTitle})
    }

    handleSubmit = () => {
        const {navigation, dispatch} = this.props
        const {deckTitle} = this.state
        const id = deckTitle.replace(/\s/g, '')
        
        //Update redux
        dispatch(addDeck(deckTitle, id))
        
        //storage
        addNewDeck(deckTitle, id)

        navigation.navigate('DeckView', {title: id})

        this.setState({deckTitle: ''})
    }

    render() {
        const {deckTitle} = this.state
        return (
            <View>
                <KeyboardAvoidingView>
                    <Text>What is the title of your new deck?</Text>
                    <TextInput 
                        label=''
                        value={deckTitle}
                        onChangeText={this.handleInputChange}
                    />
                    <Button 
                        disabled={deckTitle === ''}
                        onPress={this.handleSubmit}
                    >
                        Add Deck
                    </Button>
                </KeyboardAvoidingView>
            </View>  
        )
    }
}



export default connect()(NewDeck)