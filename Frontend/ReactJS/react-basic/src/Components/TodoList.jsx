import { useReducer, useRef } from "react";

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD':
            return [...state,action.payload]
        case 'REMOVE':
            return [...state].filter( (_,index) => index !== action.payload)
        default:
            return state

    }
}

const initalState = [];

function TodoList() {

    const [state,dispatch] = useReducer(reducer,initalState);

    const task = useRef();


    function handleAddTask(){
        dispatch({type : 'ADD' ,payload : task.current.value});
    }

    function handleDeleteTask(index){
        console.log('Clicked')
        console.log(index)
        dispatch({type : 'REMOVE', payload : index })
    }

    return (
        <>
            <p className="text-3xl font-bold text-black text-center mb-12">TODO LIST</p>
        <div>
            <div className=" flex flex-row gap-4">
            <label id="task" className=" basis-2/5  text-lg font-medium">Enter a task</label>
            <input type="text" htmlFor="task" className="px-4 py-2 basis-3/5 bg-gray-100 rounded-md" ref={task}/>
            </div>

            <button onClick={handleAddTask} className="px-4 py-2 bg-green-400 text-stone-900 w-1/4 rounded-lg mx-auto mt-10 ">
                    Add
            </button>
        </div>
         <ul className="flex flex-col gap-5 mt-8">
             {state.map((item , index) => <div key={item} className="flex flex-row justify-between gap-4"> <li className="text-gray-900 font-semibold text-lg basis-3/5" key={item}>{item}</li> <button onClick={ () => handleDeleteTask(index)} className="px-4 py-2 bg-red-400 text-stone-900 w-1/4 rounded-lg mx-auto basis-2/5">DELETE</button></div>)}
         </ul>
        </>

    )
}

export default TodoList
