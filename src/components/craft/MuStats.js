import React, { useState } from 'react'
import { Button } from 'react-bootstrap' // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/global.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMu } from '../../actions/actions'
import { toast } from "react-toastify";

const Stats = () => {
    const selectedYear = useSelector(state => state.selectedYear)
    const allSessions = useSelector(state => state[selectedYear].craft)
    const allCraftMu = useSelector(state => state[selectedYear].craftMu)

    let totalTtIn = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttIn)
    }, 0)

    let totalTtOut = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttOut)
    }, 0)

    let allMU = allCraftMu.reduce((acc, curr) => {
        return acc + parseInt(curr.mu)
    }, 0)

    let percent = ((totalTtOut + allMU) * 100 / totalTtIn || 0).toFixed(2)




    return (
        <>
            <p> Global stats after MU
                <span className="handAlign">&#9758;</span>
                &emsp; Total In: {totalTtIn}
                <span style={{ color: "black" }}> | </span>
                Total Out: {totalTtOut}
                <span style={{ color: "black" }}> | </span>
                Total Mu: {allMU}
                <span style={{ color: "black" }}> | </span>
                Total PED after MU: {totalTtOut - totalTtIn + allMU}
                <span style={{ color: "black" }}> | </span>
                Return: {percent}% </p>
        </>
    )
}

export default Stats
