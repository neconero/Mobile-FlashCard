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
        console.log(title)
        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({decks}, {route}) => {
    const {deckTitle} = route.params

    return{
        title: deckTitle,
        questions: decks[deckTitle].questions
    }
}

export default connect(mapStateToProps)(DeckView)