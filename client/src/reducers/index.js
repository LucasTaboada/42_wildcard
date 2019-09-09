import { combineReducers } from 'redux';
import home_reducer from './reducer_home';
import currentUser from './reducer_currentUser';


const reducers = combineReducers({
    Home:home_reducer,
    currentUser
})

export default reducers;