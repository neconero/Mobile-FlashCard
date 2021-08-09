import React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-paper'
import {connect} from 'react-redux'
//import QuizCard from './QuizCard'

class QuizView extends React.Component {
    state ={
        cardIndex: 0,
        score: 0,
        correct: 0,
        incorrect: 0,
        showAnswer: false,
        length: this.props.deck.questions.length,
        completed: false,
    }

    

    toggleAnswer = () => {
        this.setState({
            showAnswer: true,
        })
    }

    selectedAnswer = (choice) => {
        let {correct, incorrect, length} = this.state
        if(choice === 'incorrect') {
            this.setState( {
                correct: correct + 1,
            })
        }else{
            this.setState( {
                incorrect: incorrect + 1,
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
    

    render() {
        const {length} = this.state
        const {title} = this.props
        console.log(length)
        if(length === 0){
            return(
                <View>
                    <Text>{title}</Text>
                    <Text>This deck has no Card. Please add a card!</Text>
                    <Button onPress={this.addCard}>Add Card</Button> 
                </View>
            )
        }
        return(
            <View>
                <Text>{this.state.length}</Text>
            </View>
        )
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