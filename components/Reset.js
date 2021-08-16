import React from 'react'
import {Text, View, StyleSheet, Pressable} from 'react-native'
import {connect} from 'react-redux'
import {lavender, black, white} from '../utils/colours'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lavender,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: black,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 50,
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
class Reset extends React.Component {
    render() {
        const {correct, length, resetQuiz, goBack} = this.props
        return (
            <View style={styles.container}>
                <View>
                    <Text  style={styles.text}>Results</Text>
                    <Text style={styles.text}>You have achieved {correct} mark from a possible {length} questions</Text>
                </View>
                <View>
                    <Pressable
                        onPress={() => 
                            resetQuiz()}
                        style={[styles.iosButton, {backgroundColor: black}]}
                    >
                        <Text
                            style={styles.textBtn}
                        >
                            Reset Quiz
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => 
                            goBack()}
                        style={[styles.iosButton, {backgroundColor: black}]}
                    >
                        <Text
                            style={styles.textBtn}
                        >
                            Back
                        </Text>
                    </Pressable>
                </View>
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