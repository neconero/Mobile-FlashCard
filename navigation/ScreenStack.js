import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './BottomTab'
import DeckView from '../components/DeckView'
import QuizView from '../components/QuizView'
import AddCard from '../components/AddCard'
import {purple, white} from '../utils/colours'

const screenStack = createStackNavigator()

const ScreenStackNavigator = () => {
    return(
        <screenStack.Navigator>
            <screenStack.Screen 
                name='Home'
                component={TabNavigator}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: purple,
                      },
                      headerTintColor: white,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
            />
            <screenStack.Screen 
                name='DeckView'
                component={DeckView}
                options={({route}) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: purple,
                      },
                      headerTintColor: white,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                })}
            />
            <screenStack.Screen 
                name='AddCard'
                component={AddCard}
                options={{
                    title: 'Add Card',
                    headerStyle: {
                        backgroundColor: purple,
                      },
                      headerTintColor: white,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
            />
            <screenStack.Screen 
                name='QuizView'
                component={QuizView}
                options={{
                    title: 'Quiz',
                    headerStyle: {
                        backgroundColor: purple,
                      },
                      headerTintColor: white,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
            />
        </screenStack.Navigator>
    )
}

export default ScreenStackNavigator