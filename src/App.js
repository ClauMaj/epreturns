
import React from 'react'
import { Link } from "react-router-dom";
import * as StyledC from "./components/styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component

const App = () => {



  return (
    <StyledC.MainDiv >
      <div className="row mx-0">
        <div className="col-8 offset-2">
          <StyledC.H1JobsDiv>
            <StyledC.HomeH1>Tracker!</StyledC.HomeH1>
          </StyledC.H1JobsDiv>
          <StyledC.ButtonDiv>
            <Link to="/ep2" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Ep 2</Button></Link>
            <Link to="/hunt" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Add entry</Button></Link>
            <Link to="/mine" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Add entry</Button></Link>
          </StyledC.ButtonDiv>
        </div>
      </div>
    </StyledC.MainDiv>
  )
}

export default App
