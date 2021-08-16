import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import FlipCard from 'react-native-flip-card'
import {lavender, black, orange, white} from '../utils/colours'
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
                <View style={{alignSelf: 'center'}}>
                        <Pressable
                            onPress={() => 
                                onAnswer('correct')
                            }
                            style={[styles.iosButton, {backgroundColor: black}]}
                        >
                            <Text
                                style={styles.textBtn}
                            >
                                Correct
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => 
                                onAnswer('incorrect')
                            }
                            style={[styles.iosButton, {backgroundColor: black}]}
                        >
                            <Text
                                style={styles.textBtn}
                            >
                                Incorrect
                            </Text>
                        </Pressable>
                </View>
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