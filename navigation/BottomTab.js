import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DeckList from '../components/DeckList'
import NewDeck from '../components/NewDeck'

const Tabs = createBottomTabNavigator()


const TabNavigator = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen
                name='Decks'
                component={DeckList}
                options={{title: 'Decks'}} 
            />
            <Tabs.Screen
                name='New Deck'
                component={NewDeck}
                options={{title: 'New'}} 
            />
        </Tabs.Navigator>
    )
}

export default TabNavigator