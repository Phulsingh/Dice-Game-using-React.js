import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({roleDice, currentDice}) => {
  
  
  
  return (
    <DiceContainer>
      <div className='dice'
        onClick={roleDice}>
        <img src={`/images/dice_${currentDice} (1).png`}></img>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`
    margin-top:48px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;


    .dice{
      cursor: pointer;
    }
    p{
      font-size:24px;
    }
`;