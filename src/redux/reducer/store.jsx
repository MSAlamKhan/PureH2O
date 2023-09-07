import {
  createStore,
  applyMiddleware,
  $CombinedState,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import holderReducer from './Holder';
import CommonHolderReducer from './CommonHolder';
import reducer from './index';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composedEnhancer);
export default store;
