import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {connect} from 'react-redux'
import {lavender, white, black} from '../utils/colours'
import QuizCard from './QuizCard'
import Reset from './Reset'

const styles = StyleSheet.create({
    noCardContainer: {
        flex: 1,
        backgroundColor: lavender,
        justifyContent: 'center',
        alignItems: 'center'
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

class QuizView extends React.Component {
    state ={
        cardIndex: 0,
        correct: 0,
        incorrect: 0,
        length: this.props.deck.questions.length,
        completed: false,
    }


    selectedAnswer = (choice) => {
        let {correct, incorrect, length, cardIndex} = this.state
        if(choice === 'incorrect') {
            this.setState( {
                incorrect: incorrect + 1,
            })
        }else{
            this.setState( {
                correct: correct + 1,
            })
        }

        //check quiz completion
        if(cardIndex === (length - 1)){
            this.setState( {
                completed: true,
            })
        }else{
            this.setState( {
                cardIndex: cardIndex + 1,
            })
        }
    }
    
    handleReset = () => {
        this.setState( {
            cardIndex: 0,
            completed: false,
            correct: 0,
            incorrect: 0,
        })
    }

    handleBack = () => {
        const {navigation, title} = this.props

        navigation.navigate('DeckView', {title})
    }

    render() {
        const {length, correct, cardIndex, showAnswer, completed} = this.state
        const {title} = this.props
        
        if(length === 0){
            return(
                <View style={styles.noCardContainer}>
                    <View>
                        <Text style={{textAlign:'center'}}>{title}</Text>
                        <Text>This deck has no Card. Please add a card!</Text>
                    </View>
                    <View>
                        <Pressable
                            onPress={this.addCard}
                            style={[styles.iosButton, {backgroundColor: black}]}
                        >
                            <Text
                                style={styles.textBtn}
                            >
                                Add Card
                            </Text>
                        </Pressable>
                    </View> 
                </View>
            )
        }else if(!completed) {
            return(
                <QuizCard

                    cardIndex={cardIndex}
                    questionLength={length}
                    showAnswer={showAnswer}
                    onAnswer={this.selectedAnswer}
                    id={title}
                />
            )
        }else{
            return(
                <Reset

                    length={length}
                    correct={correct}
                    goBack={this.handleBack}
                    resetQuiz={this.handleReset}
                />
            )
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const title = ownProps.route.params ? ownProps.route.params.title : null
    const decks = state ? state.decks : null
    
    return {
        title,
        deck: decks && decks[title]
    }
}

export default connect(mapStateToProps)(QuizView)