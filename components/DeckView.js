import React from 'react'
import {connect} from 'react-redux'
import { Text, View } from 'react-native'

class DeckView extends React.Component {
    handleCardAddition = () => {
        const {title, navigation} = this.props
        navigation.navigate('AddCard', {title})
    }
    startQuiz = () => {
        const {title, navigation} = this.props
        navigation.navigate('Quiz', {title})
    }
    render() {
        const {title, questions} = this.props
        // let questions = decks[title].questions
        
        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
            </View>
        )
    }
}

//&& state.decks[deckTitle].questions

const mapStateToProps = (state, ownProps) => {
    const title = ownProps.route.params ? ownProps.route.params.title : null

    

    return{
        title: title,
        questions: state && state.decks && state.decks[title].questions
    }
}

export default connect(mapStateToProps)(DeckView)