import React, { Component} from 'react'
import {Text, KeyboardAvoidingView, View, StyleSheet, Pressable} from 'react-native'
import {handleNewDeck} from '../actions/index'
import {connect} from 'react-redux'
import {TextInput} from 'react-native-paper'
import {black, lavender, white} from '../utils/colours'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lavender,
    },
    text:{
        color: black,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 50,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1, 
        padding: 10,
        marginTop: 80,
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
    textBtn:{
        color: white,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold',  
    },
})

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
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <View>
                        <Text style={styles.text}>What is the title of your new deck?</Text>
                        <TextInput 
                            label=''
                            value={deckTitle}
                            onChangeText={this.handleInputChange}
                            style={styles.input}
                        />
                    </View>   
                </KeyboardAvoidingView>
                <View style={{alignSelf: 'center'}}>
                        <Pressable
                            disabled={deckTitle === ''}
                            onPress={this.handleSubmit}
                            style={[styles.iosButton, {backgroundColor: black}]}
                        >
                            <Text
                                style={styles.textBtn}
                            >
                                Add Deck
                            </Text>
                        </Pressable>
                </View>
            </View>  
        )
    }
}



export default connect()(NewDeck)