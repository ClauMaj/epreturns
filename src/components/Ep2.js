import React from 'react'
import { Link } from "react-router-dom";
import * as StyledC from "./styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component
import TabSection from './TabSection'
import Stats from './Stats'

const Ep2 = () => {


    return (
        <StyledC.MainDiv >
            <div className="row mx-0">
                <div className="col-8 offset-2">
                    <StyledC.H1JobsDiv>
                        <StyledC.HomeH1 h="5vh">Ep 2!</StyledC.HomeH1>
                    </StyledC.H1JobsDiv>

                </div>
            </div>
            <div className="row mx-0">
                <div className="col-10 offset-1">
                    <StyledC.YearDiv>
                        <Button variant="warning" size="lg">2021</Button>
                    </StyledC.YearDiv>
                </div>
            </div>

            <div className="row mx-0">
                <div className="col-10 offset-1">

                    <TabSection />
                </div>
            </div>

            <div className="row mx-0">
                <div className="col-10 offset-1">

                    <Stats />
                </div>
            </div>



        </StyledC.MainDiv>
    )
}

export default Ep2