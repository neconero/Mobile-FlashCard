import React, { Component} from 'react'
import {Text, KeyboardAvoidingView, View} from 'react-native'
import {handleNewDeck} from '../actions/index'
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
         
        //Update redux
        dispatch(handleNewDeck(deckTitle.trim())).then(() => {

            navigation.navigate('DeckView', {title: deckTitle.trim()})

            this.setState({deckTitle: ''})
        })   
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