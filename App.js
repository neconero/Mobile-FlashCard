import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import ScreenStackNavigator from './navigation/ScreenStack'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'

class App extends React.Component {
  render() {
    const store = createStore(reducer, middleware)
    return (
      <Provider store={store}>
        <NavigationContainer>
          <ScreenStackNavigator />
        </NavigationContainer>
        <View style={styles.container}>
          
          <StatusBar style="auto" />
        </View>
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
