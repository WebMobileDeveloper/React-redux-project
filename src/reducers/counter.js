/**
 * Created by Pro on 7/16/2017.
 */

import * as types from '../actions/ActionTypes';

const initalState={
    number:0,
    dumbobj:{
        d:0,
        u:1,
        m:2
    }
};
export default function counter(state=initalState, action) {

    switch (action.type){
        case types.INCREMENT:
            return {...state,number:state.number+1,dumbobj:{d:3}};
        case types.DECREMENT:
            return {
                ...state,
                number:state.number-1
            };
        default:
            return state;
    }
}
