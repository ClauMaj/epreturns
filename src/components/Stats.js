import React from 'react'
import { useSelector } from 'react-redux';

const Stats = () => {
    const allSessions = useSelector(state => state.year2021.ep2)

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
            <p> Global stats <span style={{ color: "black" }}>|</span> TotalIn: {totalTtIn} <span style={{ color: "black" }}>|</span> TotalOut: {totalTtOut} <span style={{ color: "black" }}>|</span> Return: {percent}% </p>
        </>
    )
}

export default Stats
