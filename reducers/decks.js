import { RECEIVE_DECKS, ADD_DECK } from "../actions"

export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}