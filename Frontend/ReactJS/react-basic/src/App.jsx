import ArrayList from "./Components/ArrayList"
import FirstReact from "./Components/FirstReact"
import Increment from "./Components/Increment"
import Navigation from "./Components/Navigation"
import UpdatingText from "./Components/UpdatingText"


function App() {
  return (

    <div> 

    <Navigation /> 
    <div className="container mx-auto p-4 bg-slate-100 my-10 ">
    <p className=" text-gray-900  font-bold">1st Question</p>
      <FirstReact />
    </div>

    <div className="container mx-auto p-4 bg-zinc-100 my-10">
    <p className=" text-gray-900  font-bold">2nd Question</p>
      <ArrayList />
    </div>

    <div className="container mx-auto p-4 bg-stone-100 my-10">
      <p className=" text-gray-900  font-bold">3rd Question</p>
      <UpdatingText />
    </div>

    <div className="container mx-auto p-4 bg-lime-50 my-10">
      <p className=" text-gray-900  font-bold">4th Question</p>
      <Increment />
    </div>
    </div>
  )
}

export default App

