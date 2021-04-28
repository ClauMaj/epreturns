
import React from 'react'
import { Link } from "react-router-dom";
import * as StyledC from "./styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component

const Days = (props) => {


    let allDaysLi = [];
    for (let i = 1; i < 32; i++) {
        allDaysLi.push(
            <StyledC.DayLi>

                <div className="row">
                    <div className="col-3">
                        <ul>
                            <StyledC.DayLi><p className="my-0"> Hello 1</p></StyledC.DayLi>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p className="my-0"> Hello 2</p>
                    </div>
                    <div className="col-3">
                        <p className="my-0"> Hello 3</p>
                    </div>
                    <div className="col-3">
                        <p className="my-0"> Hello 4</p>
                    </div>
                </div>
            </StyledC.DayLi>
        )
    }


    return (
        <div>
            <div className="row">
                <p className="ml-4 my-3 monTotal">Monthly total: </p>
            </div>
            <div className="row">
                <ul className="w-100">
                    {allDaysLi}
                </ul>
            </div>
        </div>
    )
}

export default Days
