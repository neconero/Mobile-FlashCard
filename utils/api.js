import AsyncStorage  from '@react-native-async-storage/async-storage';
import {_getDecks} from './_DATA.js'

const DECK_STORAGE_KEY = 'MobileFlashcards: deck'





export async function getDecks(){
  const results = await AsyncStorage.getItem(DECK_STORAGE_KEY)
  const decks = await _getDecks()

  if(results === null){
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    return decks
  }else{
    return JSON.parse(results)
  }
}