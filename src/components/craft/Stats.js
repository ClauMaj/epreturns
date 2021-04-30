import React from 'react'
import { useSelector } from 'react-redux';
import '../../assets/global.css';

const Stats = () => {
    const selectedYear = useSelector(state => state.selectedYear)
    const allSessions = useSelector(state => state[selectedYear].ep2)

    let totalTtIn = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttIn)
    }, 0)

    let totalTtOut = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttOut)
    }, 0)
    let percent = (totalTtOut * 100 / totalTtIn || 0).toFixed(2)

    console.log(totalTtIn)
    return (
        <>
            <p> Global stats<span className="handAlign">&#9758;</span> &emsp; Total In: {totalTtIn} <span style={{ color: "black" }}>|</span> Total Out: {totalTtOut} <span style={{ color: "black" }}> | </span> Total PED: {totalTtOut - totalTtIn} <span style={{ color: "black" }}>|</span> Return: {percent}% </p>
        </>
    )
}

export default Stats
