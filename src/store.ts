import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state:any,action:any)=>{

    switch(action.type){
        case 'Increment':
            return {
                counter:state.counter+1
            }
        case 'Decrement':
            return {
                counter:state.counter-1
            }
        default:
            return state;
    }

};

export const createReduxStore = ()=>{
    return configureStore({
        reducer:counterReducer,
        preloadedState:{
            counter:0
        }
    })
};
