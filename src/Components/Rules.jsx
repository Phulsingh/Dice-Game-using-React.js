import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
   <RulesContainer>
    <h2>How to play Dice Game</h2>
    <div className='text'>
    <ul>
    <li>Select any Number</li>
    <li>Click on dice images</li>
    <li>After click on dice if selected number is equal to dice number you 
        will get some points as dice{""}</li>
        <li>If you get wrong guess then 2 points will be deducted</li>
    </ul>
    </div>
    
   </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
position:absolute;
top:400px;
background-color: #fbf1f1;
padding: 20px;
width:500px;
padding: 20px;
left:50px;
border-radius:10px;
h2{
    font-size:24px;
}
.text{
    margin-top:18px;
}
ul{
    padding:0px 10px;
}


`;
