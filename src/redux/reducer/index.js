import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {todos} from './addTaskReducer'

const rootReducer = combineReducers({todos});
const create =compose (applyMiddleware(thunk))(createStore);
export default create (rootReducer);