import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import ScreenStackNavigator from './navigation/ScreenStack'
import {Provider} from 'react-redux'
import {Provider as PaperProvider} from 'react-native-paper'
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import {setLocalNotification} from './utils/helpers'

class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    const store = createStore(reducer, middleware)
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <ScreenStackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
      
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
