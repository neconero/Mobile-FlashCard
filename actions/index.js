import {getDecks, addCardToDeck, addNewDeck, removeDeck} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'



export function receiveDecks(decks) {
    return{
        type: RECEIVE_DECKS,
        decks
    }
}


export function handleInitialData(){
    return (dispatch) => {
        return getDecks ()
            .then ((decks) => {
                dispatch(receiveDecks(decks));
            })
    }
}

export function addCard(title, card) {
    return{
        type: ADD_CARD,
        title,
        card,
    }
}


export function addDeck(deckTitle, id) {
    return{
        type:  ADD_DECK,
        title: deckTitle,
        id,
    }
}

export function handleNewDeck(deckTitle){
    let id = deckTitle
    return (dispatch) => {
        return addNewDeck(deckTitle, id) 
        .then(() => {
            dispatch(addDeck(deckTitle, id))
        })
    }
}

export function deleteDeck(deckID){
    return{
        type: 'DELETE_DECK',
        deckID,
    }
}

export function handleDeleteDeck(deckID){
    
    return (dispatch) => {
        return deleteDeck(deckID) 
        .then(() => {
            dispatch(removeDeck(deckID))
        })
    }
}
