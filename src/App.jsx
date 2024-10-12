import Startgame from "./Components/Startgame";
import Gameplay from "./Components/Gameplay";

import { useState } from "react";
function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setisGameStarted((prev)=> !prev);
  }
  return (
    <>
    {isGameStarted ? <Gameplay/> : <Startgame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
