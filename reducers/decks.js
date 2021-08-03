import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions"

export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.id]:{
                    title: action.title,
                    questions: []
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD:
            return{
                ...state,
                [action.title]:{
                    ...state[action.title],
                    questions: state[action.title].questions.concat([action.card])
                }
            }
        default:
            return state
    }
}