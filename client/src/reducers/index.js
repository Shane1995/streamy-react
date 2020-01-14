import { combineReducers } from 'redux'; 
//Change the name of a common term 
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'; 
import streamReducers from './streamReducers'; 


export default combineReducers({
    auth: authReducer, 
    form: formReducer, 
    streams: streamReducers
});