import React from 'react'
import {connect} from 'react-redux'
import { Text, View, TouchableOpacity, StyleSheet, Platform, Pressable } from 'react-native'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'
import {white, black, lavender} from '../utils/colours'

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: lavender,
    },
    androidAddCardBtn:{
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        height: 50,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtnText:{
        color: black,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold',
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    titleLen: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
})

function AddCardBtn({onPress}) {
    return(
        <TouchableOpacity
            style={[Platform.OS === 'ios' ? styles.iosButton : styles.androidAddCardBtn, {backgroundColor: white}]}
            onPress={onPress}
        >
            <Text style={styles.addBtnText}>Add Card</Text>
        </TouchableOpacity>
    )
}

function QuizBtn({onPress}){
    return(
        <Pressable
            style={[styles.iosButton, {backgroundColor: black}]}
            onPress={onPress}
        >
            <Text style={styles.text}>Start Quiz</Text>
        </Pressable>
    )
}

class DeckView extends React.Component {
    
    handleCardAddition = () => {
        const {title, navigation} = this.props
        navigation.navigate('AddCard', {title})
    }
    startQuiz = () => {
        const {title, navigation} = this.props

        clearLocalNotification()
            .then(setLocalNotification)

        navigation.navigate('QuizView', {title})
        
    }
    render() {
        const {title, questions} = this.props
        
        return (
            <View style={[styles.deckContainer]}>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    {title && <Text style={styles.titleLen}>{title}</Text>}
                    {questions && questions.length > 1 
                        ? <Text style={styles.titleLen}>{questions.length } cards</Text> 
                        : <Text style={styles.titleLen}>{questions.length } card</Text>}
                </View>
                <View>
                    <AddCardBtn onPress={this.handleCardAddition}/>
                    <QuizBtn onPress={this.startQuiz}/>
                </View>
            </View>
        )
    }
}

//&& state.decks[deckTitle].questions

const mapStateToProps = (state, ownProps) => {
    const title = ownProps.route.params ? ownProps.route.params.title : null
    const decks = state ? state.decks : null
   

    return{
        title: title,
        questions: decks && decks[title].questions
    }
}

export default connect(mapStateToProps)(DeckView)