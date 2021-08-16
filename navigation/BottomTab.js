import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DeckList from '../components/DeckList'
import NewDeck from '../components/NewDeck'
import {lightPurp} from '../utils/colours'
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()


const TabNavigator = () => {
    return(
        <Tabs.Navigator
            initialRouteName='Decks'
            screenOptions={{
                tabBarActiveTintColor: lightPurp
            }}
        >
            <Tabs.Screen
                name='Decks'
                component={DeckList}
                options={{
                    tabBarLabel: 'Decks',
                    tabBarIcon: ({tintColor}) => (
                        <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
                    )
                }}
            />
            <Tabs.Screen
                name='New'
                component={NewDeck}
                options={{
                    tabBarLabel: 'New',
                    tabBarIcon: ({tintColor}) => (
                        <FontAwesome name='plus-square' size={30} color={tintColor} />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default TabNavigator