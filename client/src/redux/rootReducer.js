import { combineReducers } from 'redux';
import postReducer from './posts/postReducer';

const rootReducer = combineReducers({ posts: postReducer });

export default rootReducer;
