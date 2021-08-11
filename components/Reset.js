import React from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-paper'
import {connect} from 'react-redux'

// function Reset(props) {
//     return(
        
//     )
// }
class Reset extends React.Component {
    render() {
        const {correct, length, resetQuiz, goBack} = this.props
        return (
            <View>
                <Text>Results</Text>
               
                <Text>You have achieved {correct}</Text>
                <Button
                    onPress={() => 
                        resetQuiz()
                    }
                >
                    Reset Quiz
                </Button>
                <Button
                    onPress={() => 
                        goBack()
                    }
                >
                    Back
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state, {correct, length, resetQuiz, goBack}) => {
    return{
        correct,
        length,
        resetQuiz,
        goBack,
    }
}

export default connect(mapStateToProps)(Reset)