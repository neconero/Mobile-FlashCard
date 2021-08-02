import AsyncStorage  from '@react-native-async-storage/async-storage';
import {_getDecks} from './_DATA.js'

const DECK_STORAGE_KEY = 'MobileFlashcards: deck'

export async function getDecks(){

  try {
    const results = await AsyncStorage.getItem(DECK_STORAGE_KEY)
    const decks = await _getDecks()
    // await AsyncStorage.clear()

    if(results === null){
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
      return decks
    }else{
      return JSON.parse(results)
    }
    } catch (error) {
    console.log(error)
  }
  
}

export async function addCardToDeck(title, card){
  try {
    
    const decks = getDecks()

    const cardToDeck = {
        ...decks,
        [title]: {
          questions: decks && decks[title].questions.concat([card])
        }
    }
    console.log(cardToDeck, 'really')
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(cardToDeck))
    
  } catch (error) {
    console.log(error)
  }
}

export async function addNewDeck(deckTitle, id){
  try{
    const newDeck = {
      [id]: {
        title: deckTitle,
        questions: [],
      }
    }
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck))
  }catch (error) {
    console.log(error)
  }
}