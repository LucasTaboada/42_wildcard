import { combineReducers } from 'redux';
import Test from './reducer_test';
import home_reducer from './reducer_home';


const reducers = combineReducers({
    test:Test,
    Home:home_reducer
})

export default reducers;