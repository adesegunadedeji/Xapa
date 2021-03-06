import counterReducer from './counter';
import authenticationReducer from './authentication';
import colorReducer from './color'
import {combineReducers} from 'redux';
import directoryReducer from './directory'

//All Reducers
const rootReducer = combineReducers({
    colorReducer: colorReducer,
    counter: counterReducer,
    authentication: authenticationReducer,
    directory: directoryReducer

});

export default rootReducer