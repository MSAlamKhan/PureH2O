import { combineReducers } from 'redux'
import holderReducer from './Holder';
import CommonHolderReducer from './CommonHolder';

export default combineReducers({
    holderReducer,
    CommonHolderReducer
})