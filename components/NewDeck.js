import React, { Component} from 'react'
import {Text, KeyboardAvoidingView} from 'react-native'
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
        const {navigation} = this.props
        const {deckTitle} = this.state
        

        navigation.navigate('DeckView', {title:deckTitle})

        this.setState({deckTitle: ''})
    }

    render() {
        const {deckTitle} = this.state
        return (
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
                />
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(NewDeck)