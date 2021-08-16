import React from 'react'
import {connect} from 'react-redux'
import { KeyboardAvoidingView, StyleSheet, View, Pressable, Text } from 'react-native'
import {addCard} from '../actions/index'
//import {addCardToDeck} from '../utils/api'
import {TextInput} from 'react-native-paper'
import {lavender, white, black} from '../utils/colours'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lavender,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1, 
        padding: 10,
    },
    iosButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginVertical: 10,
    },
    text:{
        color: white,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold', 
    }
})

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

        // //storage
        // addCardToDeck(title, card)

        navigation.navigate('DeckView', {title})

        this.setState({answer: '', question: ''})
    }

    render() {
        const {answer, question} = this.state
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView  behavior='padding'>
                    <View>
                        <TextInput 
                            style={styles.input}
                            label='Question'
                            value={question}
                            onChangeText={this.handleQuestionChange}
                        />
                        <TextInput 
                            style={styles.input}
                            label='Answer'
                            value={answer}
                            onChangeText={this.handleAnsChange}
                        />
                    </View>
                    <View style={{alignSelf: 'center'}}>
                        <Pressable
                            disabled={answer === '' || question === ''}
                            onPress={this.handleSubmit}
                            style={[styles.iosButton, {backgroundColor: black}]}
                        >
                            <Text
                                style={styles.text}
                            >
                                Submit
                            </Text>
                        </Pressable>
                    </View>
                    
                </KeyboardAvoidingView>
            </View>   
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