import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
import * as StyledC from "./styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component
import Days from './Days'
import '../assets/global.css'

const TabSection = () => {
    const [key, setKey] = useState(0);


    const allMonths = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    useEffect(() => {
        let d = new Date();
        let currMonth = d.getMonth();
        setKey(parseInt(currMonth))
        console.log(currMonth)
    }, [])


    let monthTabs = allMonths.map((m, index) => {
        return (
            <Tab eventKey={index} title={m}>
                <Days month={index + 1} />
            </Tab>
        )
    }
    )
    return (

        <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(parseInt(k))}
        >
            {monthTabs}
        </Tabs>
    )
}

export default TabSection