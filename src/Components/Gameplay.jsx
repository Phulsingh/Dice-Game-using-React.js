import Totalscore from "./Totalscore";
import styled from "styled-components";
import Numberselector from "./Numberselector";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OuntlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = ()=>{
    const [rules, setRules] = useState(false);
    const [score, setScore]= useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber , setSelectedNumber] = useState()
    const [error, seterror] = useState("");


    const generateRandomeNumber = (min,max)=>{
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
      };
     
      const roleDice = () => {
        const randomeNumber = generateRandomeNumber(1,7);
        if(!selectedNumber){
            seterror("You have not selected Any number")
        };
         setCurrentDice((prev)=> randomeNumber);
         if(selectedNumber === randomeNumber){
            setScore((prev)=> prev + randomeNumber);
          }
          else{
            setScore((prev)=> prev - 1);
          }
          setSelectedNumber(undefined);
      }

      const resetScore=()=>{
        setScore(0);
      }
 return(
    <>
    <MainContainer>
        <div className="top-section">
            <Totalscore score={score}/>
            <Numberselector 
            error={error}
            seterror={seterror}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <Rolldice
        currentDice={currentDice}
        roleDice={roleDice}
        />
        <div className="btns">
            <OuntlineButton 
            onClick={resetScore}>Reset</OuntlineButton>
            <Button onClick={()=>setRules((prev)=> !prev)}>{rules ? "Hide" : "Show"}</Button>
        </div>
        {rules && <Rules/>}
    </MainContainer>
    </>
 )
}

export default Gameplay;

const MainContainer = styled.div`

.top-section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.btns{
    margin-top:40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap:10px;
}

`;
