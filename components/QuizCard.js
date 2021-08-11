import React from 'react'
import { Text, View } from 'react-native'
import {Button} from 'react-native-paper'
import FlipCard from 'react-native-flip-card'
import {connect} from 'react-redux'

class QuizCard extends React.Component{
    render(){
        const {decks, cardIndex, questionLength, onAnswer, id} = this.props
        const {question, answer} = decks[id].questions[cardIndex]
        return(
            <View style={{flex: 1, padding: 70}}>
                <Text>Number {cardIndex + 1} Card out {questionLength}</Text>
                <FlipCard>
                    <View>
                        <Text>{question}</Text>
                    </View>
                    <View>
                        <Text>{answer}</Text>
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