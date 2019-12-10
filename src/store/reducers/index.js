import { combineReducers } from 'redux';

import app from './app';
import albums from './albums';

const combinedReducers = combineReducers({ app, albums });
export default combinedReducers;
