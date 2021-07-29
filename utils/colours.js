import {StyleSheet} from 'react-native'

const greybrown = '#3D3635'
const white = '#fff'
const purple = '#292477'
const gray = '#757575'
const red = '#b71845'
const orange = '#f26f28'
const blue = '#4e4cb8'
const lightPurp = '#7c53c3'
const pink = '#b93fb3'

export const appStyles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: greybrown,
    },
    title: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 20,
        marginTop: 20,
        color: white,
    },
    card: {
        margin: 10,
        backgroundColor: orange,
        borderRadius: 10
    }
})

