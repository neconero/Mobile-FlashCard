import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './BottomTab'
import DeckView from '../components/DeckView'
//import DeckList from '../components/DeckList'
import AddCard from '../components/AddCard'

const screenStack = createStackNavigator()

const ScreenStackNavigator = () => {
    return(
        <screenStack.Navigator>
            <screenStack.Screen 
                name='Home'
                component={TabNavigator}
                
            />
            <screenStack.Screen 
                name='DeckView'
                component={DeckView}
                options={{title: 'DeckView'}}
            />
            <screenStack.Screen 
                name='AddCard'
                component={AddCard}
                options={{title: 'AddCard'}}
            />
        </screenStack.Navigator>
    )
}

export default ScreenStackNavigator