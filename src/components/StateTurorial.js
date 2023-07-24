import React from 'react';
import { useReducer } from 'react';


const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
        return {count:state.count + 1,showText:state.showText}
        case "toggleShow":
        return {count:state.count, showText:!state.showText};
        default:
            return state;}
}




const StateTurorial = () => {
    const [state,dispatch] = useReducer(reducer, {count: 0, showText:true})

    const addONe = () => {
        dispatch({type:"INCREMENT"})
        dispatch({type:"toggleShow"})
    };
    
  return (
    <div>
        <button className='bg-dark p-6 text-white' onClick={addONe}>{state.count}</button>
        {state.showText && <p>qkjldkzqj</p>}
    </div>
  )
}

export default StateTurorial