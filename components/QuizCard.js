import React from 'react'
import { Text, View } from 'react-native'
import {Button} from 'react-native-paper'
import FlipCard from 'react-native-flip-card'
import {connect} from 'react-redux'

class QuizCard extends React.Component{
    render(){
        const {decks, cardIndex, questionLength, answer, id} = this.props
        return(
            <View style={{flex: 1, padding: 70}}>
                <Text>Number {cardIndex + 1} Card out {questionLength}</Text>
                <FlipCard>
                    <View>
                        <Text>{decks[id].questions[cardIndex].question}</Text>
                    </View>
                    <View>
                        <Text>{decks[id].questions[cardIndex].answer}</Text>
                    </View>
                </FlipCard>
                <Button
                    onPress={() => 
                        answer('correct')
                    }
                >
                    Correct
                </Button>
                <Button
                    onPress={() => 
                        answer('incorrect')
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