
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as StyledC from "./components/styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component
import { setMonth, setYear } from './actions/actions';

const App = () => {
  // receive dispatch functions
  const dispatch = useDispatch()


  useEffect(() => {
    let d = new Date();
    let currMonth = d.getMonth();
    let currYear = d.getFullYear();
    dispatch(setMonth(parseInt(currMonth)))
    dispatch(setYear(parseInt(currYear)))
  }, [])

  return (
    <StyledC.MainDiv >
      <div className="row mx-0">
        <div className="col-8 offset-2">
          <StyledC.H1JobsDiv>
            <StyledC.HomeH1>Tracker!</StyledC.HomeH1>
          </StyledC.H1JobsDiv>
          <StyledC.ButtonDiv>
            <Link to="/craft" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Craft</Button></Link>
            <Link to="/hunt" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Add entry</Button></Link>
            <Link to="/mine" className=' mx-5'><Button style={{ color: "black", fontWeight: "bold" }} variant="secondary" size="lg">Add entry</Button></Link>
          </StyledC.ButtonDiv>
        </div>
      </div>
    </StyledC.MainDiv>
  )
}

export default App
