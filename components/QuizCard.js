import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Button} from 'react-native-paper'
import FlipCard from 'react-native-flip-card'
import {lavender, black, orange} from '../utils/colours'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lavender,
        padding: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: black,
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 70,    
    },
    card:{
        backgroundColor: orange,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 4,
        width: 220,
        justifyContent: 'center'
    },
})

class QuizCard extends React.Component{
    render(){
        const {decks, cardIndex, questionLength, onAnswer, id} = this.props
        const {question, answer} = decks[id].questions[cardIndex]
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Number {cardIndex + 1} Card from {questionLength} card(s)</Text>
                <FlipCard style={styles.card}>
                    <View>
                        <Text style={styles.text}>{question}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{answer}</Text>
                    </View>
                </FlipCard>
                <Button
                    onPress={() => 
                        onAnswer('correct')
                    }
                >
                    Correct
                </Button>
                <Button
                    onPress={() => 
                        onAnswer('incorrect')
                    }
                >
                    Incorrect
                </Button>
            </View>
        )
    }
    
}

const mapStateToProps = (state, {cardIndex, questionLength, answer, id}) => {
    const decks = state ? state.decks : null
    
    return {
        decks,
        cardIndex,
        questionLength,
        answer,
        id
    }
}

export default connect(mapStateToProps)(QuizCard)