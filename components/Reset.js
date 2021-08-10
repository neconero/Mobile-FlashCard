import React from 'react'
import {Text} from 'react-native'
import {Button} from 'react-native-paper'

function Reset({props}) {
    return(
        <View>
            <Text>Results</Text>
            <Text>You have achieved {props.correct} out of {props.length}</Text>
            <Button
                onPress={() => 
                    props.resetQuiz()
                }
            >
                Reset Quiz
            </Button>
            <Button
                onPress={() => 
                    props.goBack()
                }
            >
                Back
            </Button>
        </View>
    )
}

export default Reset