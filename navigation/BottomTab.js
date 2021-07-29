import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import DeckList from '../components/DeckList'
import NewDeck from '../components/NewDeck'

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const NewDeckStack = createStackNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={DeckList} />
    </HomeStack.Navigator>
)

const DeckStackScreen = () => (
    <NewDeckStack.Navigator>
        <NewDeckStack.Screen name='New Deck' component={NewDeck} />
    </NewDeckStack.Navigator>
)

const TabNavigator = () => {
    return(
        <Tabs.Navigator>
            <Tabs.Screen
                name='Home'
                component={HomeStackScreen}
                options={{title: 'Decks'}} 
            />
            <Tabs.Screen
                name='New Deck'
                component={DeckStackScreen}
                options={{title: 'New'}} 
            />
        </Tabs.Navigator>
    )
}