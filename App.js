import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DecksView from './components/DecksView'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'

class App extends React.Component {
  render() {
    const store = createStore(reducer, middleware)
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DecksView />
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
