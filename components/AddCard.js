import React from 'react'
import {connect} from 'react-redux'
import { KeyboardAvoidingView} from 'react-native'
import {addCard} from '../actions/index'
import {addCardToDeck} from '../utils/api'
import {TextInput, Button} from 'react-native-paper'

class AddCard extends React.Component {
    state = {
        question:'',
        answer: ''
    }

    handleAnsChange = (answer) => {
        this.setState({answer})
    }

    handleQuestionChange = (question) => {
        this.setState({question})
    }

    handleSubmit = () => {
        const { title, dispatch, navigation } = this.props
        const {question, answer} = this.state

        const card = {
            question,
            answer
        }

        //Update redux
        dispatch(addCard(title, card))

        //storage
        addCardToDeck(title, card)

        navigation.navigate('DeckView', {title})

        this.setState({answer: '', question: ''})
    }

    render() {
        const {answer, question} = this.state
        return (
            <KeyboardAvoidingView behavior='padding'>
                <TextInput 
                    label='Question'
                    value={question}
                    onChangeText={this.handleQuestionChange}
                />
                <TextInput 
                    label='Answer'
                    value={answer}
                    onChangeText={this.handleAnsChange}
                />
                <Button
                    disabled={answer === '' || question === ''}
                    onPress={this.handleSubmit}
                >
                    Add Card
                </Button>
            </KeyboardAvoidingView>
            
        )
    }  
}

const mapStateToProps = (state, ownProps) => {
    const title = ownProps.route.params ? ownProps.route.params.title : null

    return{
        title: title,
    }
}

export default connect(mapStateToProps)(AddCard)