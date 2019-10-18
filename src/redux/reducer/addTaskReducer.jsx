import {initialState} from '../initialStates/initial'

export const todos = (state =initialState, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos,action.text]
            }
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id? {...todo, completed: !todo.completed}:todo
                )
        default:
            return state
    }
}