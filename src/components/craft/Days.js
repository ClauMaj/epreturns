
import React from 'react'
import { Link } from "react-router-dom";
import * as StyledC from "../styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteCraftEntry, setYear } from '../../actions/actions'
import { toast } from "react-toastify";


const Days = (props) => {

    const selectedYear = useSelector(state => state.selectedYear)
    const allSessions = useSelector(state => state[selectedYear].craft)
    const selectedMonth = useSelector(state => state.selectedMonth)
    // receive dispatch functions
    const dispatch = useDispatch()



    let monthlySessions = allSessions.filter((entry) => {
        return parseInt(entry.mth) === selectedMonth
    }).sort((a, b) => { return a.dayName - b.dayName }).reverse();


    let totalTtIn = monthlySessions.reduce((acc, curr) => {
        return (parseInt(curr.mth) === selectedMonth) ? acc + parseInt(curr.ttIn) : acc
    }, 0)

    let totalTtOut = monthlySessions.reduce((acc, curr) => {
        return (parseInt(curr.mth) === selectedMonth) ? acc + parseInt(curr.ttOut) : acc
    }, 0)
    let percent = (totalTtOut * 100 / totalTtIn || 0).toFixed(2)

    let monthList = monthlySessions.map((entry) => {
        return (
            <StyledC.DayLi key={entry.id} >
                <div className="row mx-0 d-flex align-items-center">
                    <div className="col-2 "><b>{entry.dayOfWeek} {entry.dayName}/{entry.mth}/{entry.year}</b></div>
                    <div className="col-2 "> <b>TT in: <span style={{
                        color: "darkblue"
                    }}>{entry.ttIn}</span></b> </div>
                    < div className="col-2 " > <b>TT out: <span style={{
                        color: "darkblue"
                    }}>{entry.ttOut}</span> </b></div>
                    <div className="col-2 "><b>Result: <span style={{
                        color: ((entry.ttOut - entry.ttIn) >= 0) ? "rgb(39, 88, 39)" : "darkred"
                    }}>{entry.ttOut - entry.ttIn}</span> </b></div>
                    <div className="col-1" style={{
                        color: ((entry.ttOut * 100 / entry.ttIn || 0).toFixed(2) >= 100) ? "rgb(39, 88, 39)" : "darkred"
                    }}> <b> {(entry.ttOut * 100 / entry.ttIn || 0).toFixed(2)}%</b> </div>
                    < div className="col-2 " > <b> <span style={{
                        color: "darkblue"
                    }}>{entry.bp}</span> </b></div>

                    <div className=" col-1 d-flex align-items-center justify-content-end">

                        <Button className="deleteEdit" onClick={() => {
                            dispatch(deleteCraftEntry(entry.id));
                            toast.error(`Entry deleted!`);
                        }}>
                            <FontAwesomeIcon icon={["fas", "trash"]} color="black" />
                        </Button>


                    </div>
                </div>
            </StyledC.DayLi >
        )
    })





    return (
        <div>
            <div className="row">
                <p className="ml-4 my-3 monTotal">Monthly stats<span className="handAlign">&#9758;</span>&emsp; Total In: {totalTtIn} <span style={{ color: "black" }}>|</span> Total Out: {totalTtOut} <span style={{ color: "black" }}>|</span> Total PED: {totalTtOut - totalTtIn} <span style={{ color: "black" }}>|</span> Return: {percent}% </p>
            </div>
            <div className="row">
                <ul className="w-100">
                    {monthList}
                </ul>
            </div>
            <div style={{ height: "100px" }}>

            </div>
        </div>
    )
}

export default Days
