import React from 'react'
import {connect} from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import {Button} from 'react-native-paper'

class DeckView extends React.Component {
    
    handleCardAddition = () => {
        const {title, navigation} = this.props
        navigation.navigate('AddCard', {title})
    }
    startQuiz = () => {
        const {title, navigation} = this.props
        navigation.navigate('QuizView', {title})
    }
    render() {
        const {title, questions} = this.props
        // let questions = decks[title].questions
        
        return (
            <View>
                {title && <Text>{title}</Text>}
                {questions && <Text>{questions.length}</Text>}
                <TouchableOpacity
                    onPress={this.handleCardAddition}
                >
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <Button
                    onpress={this.startQuiz}
                >
                    Start Quiz
                </Button>
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