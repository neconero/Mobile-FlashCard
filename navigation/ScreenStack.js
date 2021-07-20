import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DeckView from '../components/DeckView'
import DeckList from '../components/DeckList'

const screenStack = createStackNavigator()

const ScreenStackNavigator = () => {
    return(
        <screenStack.Navigator>
            <screenStack.Screen 
                name='Decks'
                component={DeckList}
                options={{title: 'Decks'}}
            />
            <screenStack.Screen 
                name='DeckView'
                component={DeckView}
                options={{title: 'DeckView'}}
            />
        </screenStack.Navigator>
    )
}

export default ScreenStackNavigator