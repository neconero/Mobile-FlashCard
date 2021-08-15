import {StyleSheet} from 'react-native'

export const greybrown = '#3D3635'
export const white = '#fff'
export const purple = '#292477'
export const gray = '#757575'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'
export const black = '#000'
export const lavender = '#d6cadd'

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

