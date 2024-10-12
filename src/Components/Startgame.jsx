import styled from "styled-components";
import { Button } from "../styled/Button";
const Startgame = ({toggle})=>{
    return(
        <>
      <Container>
        <div>
        <img src="/images/dices.png" width="350px" alt="Image"/>
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
        </>
    )
}

export default Startgame

const Container  = styled.div`
    max-width:1180px;
    display:flex;
    margin:0 auto;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content:center;
  .content{
    h1{
        font-size:70px;
        white-space:nowrap;
    }
  }
`;
