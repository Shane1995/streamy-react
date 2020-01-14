import _ from 'lodash'; 
import {
    FETCH_STREAM, 
    FETCH_STREAMS, 
    CREATE_STREAM, 
    EDIT_STREAM, 
    DELETE_STREAM
} from '../actions/types'; 


export default (state = {}, action) => { 
    switch(action.type){
        case FETCH_STREAM: 
            return {...state, [action.payload.id]: action.payload};
        case FETCH_STREAMS: 
            //mapkeys converts the array of all streams to an object
            // looks at the id uses that id as the key to assign the values to 
            
            return {...state, ..._.mapKeys(action.payload, 'id')};  
        case CREATE_STREAM: 
            return {...state, [action.payload.id]: action.payload}; 
        case EDIT_STREAM: 
            return {...state, [action.payload.id]: action.payload}; 
        case DELETE_STREAM: 
            return _.omit(state, action.payload);
        default: 
            return state; 
    }
}
