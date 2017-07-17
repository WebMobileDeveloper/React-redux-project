/**
 * Created by Pro on 7/16/2017.
 */

import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers=combineReducers({
    counter,ui
});
export default reducers;
