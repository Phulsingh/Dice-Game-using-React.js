import React, { useState } from 'react'
import styled from 'styled-components'
const Numberselector = ({seterror, error,selectedNumber , setSelectedNumber}) => {
    const array = [1,2,3,4,5,6];
    console.log(selectedNumber);

    const numberSelectorHandler = (value)=>{
      setSelectedNumber(value);
      seterror("");
    }
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'> 
      {array.map((value, i)=>(
            <Box
            isSelected = {value === selectedNumber}
            key={i} 
            onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default Numberselector

const NumberSelectorContainer = styled.div`

display:flex;
flex-direction: column;
align-items: end;

.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700;
}
.error{
  color: red;
}

`;


const Box = styled.div`
  height: 72px;;
  width: 72px;
  border:1px solid black;
  display: grid;
  place-items:center;
  color: black;
  font-weight:700;
  font-size: 24px;
  cursor: pointer;
  background-color : ${(props)=> (props.isSelected ? "black"  : "white")};
  color : ${(props)=> (props.isSelected ? "white"  : "black")};
`;