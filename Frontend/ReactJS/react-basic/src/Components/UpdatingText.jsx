import { useState } from "react"

function UpdatingText() {
    const [isClicked,setIsClicked] = useState(false)
    return (
        <div className="mt-6">
            <p className="my-4">I am learning react {isClicked ? 'and hooks as well' : null}</p>
            <button className="bg-green-200 px-4 py-2 rounded-lg text-stone-900" onClick={() => setIsClicked(state => !state)}>Update me</button>
        </div>
    )
}

export default UpdatingText
