import { useReducer } from "react";


const reducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state.count === 25 ? {count : 0} :  {count : state.count + 1};
        case 'DECREMENT':
            return state.count === 0 ? {count : 25} : {count : state.count -1};
        default :
            return state 
    }
}

const initalState = {count : 0}


function ReducerIncrement() {

    const [state,dispatch] = useReducer(reducer,initalState)
    return (
        <div>

<div className="mt-6">
            <p className=" text-lg my-6">{state.count}</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})} className="bg-green-200 px-4 py-2 rounded-lg text-stone-900 mr-4">Increment</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})} className="bg-red-400 px-4 py-2 rounded-lg text-stone-900">Decrement</button>
        </div>
            
        </div>
    )
}

export default ReducerIncrement
