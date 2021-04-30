import React from 'react'
import { Link } from "react-router-dom";
import * as StyledC from "../styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component
import TabSection from './TabSection'
import Stats from './Stats'
import { useDispatch } from 'react-redux';
import { setYear } from '../../actions/actions';
import '../../assets/global.css';

const Ep2 = () => {

    // receive dispatch functions
    const dispatch = useDispatch()

    const allYears = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]

    let allYearsButtons = allYears.map((year) => {
        return (
            <Button className="yearButton mx-1" size="sm">2021</Button>
        )
    }
    )


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
                        {allYearsButtons}
                    </StyledC.YearDiv>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-10 offset-1 monTotal">

                    <Stats />
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-10 offset-1">

                    <TabSection />
                </div>
            </div>





        </StyledC.MainDiv>
    )
}

export default Ep2