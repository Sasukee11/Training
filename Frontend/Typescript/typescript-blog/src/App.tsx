import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="w-10/12  mx-auto ">
        <Home />
      </div>
    </>
  );
}
