import { useState } from "react"

function Increment() {

    const [add,setAdd] = useState(0);

    console.log(add)

    function handleClick(){
        setAdd( (state) => state === 25 ? 0 : state + 1)

    }

    function handleDecre(){
        setAdd( state => state === 0 ? 25 : state - 1)
    }
    return (
        <div className="mt-6">
            <p className=" text-lg my-6">{add}</p>
            <button onClick={handleClick} className="bg-green-200 px-4 py-2 rounded-lg text-stone-900 mr-4">Increment</button>
            <button onClick={handleDecre} className="bg-red-400 px-4 py-2 rounded-lg text-stone-900">Decrement</button>
        </div>
    )
}

export default Increment
