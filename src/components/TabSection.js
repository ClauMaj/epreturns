import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as StyledC from "./styles/Styles";
import { Button } from 'react-bootstrap'; // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import Days from './Days';
import AddEntryForm from './AddEntryForm';
import '../assets/global.css';
import { setMonth } from '../actions/actions';

const TabSection = () => {
    const [key, setKey] = useState(0);

    // receive dispatch functions
    const dispatch = useDispatch()

    const allMonths = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    useEffect(() => {
        let d = new Date();
        let currMonth = d.getMonth();
        setKey(parseInt(currMonth))
        dispatch(setMonth(parseInt(currMonth)))
        console.log(currMonth)
    }, [])


    let monthTabs = allMonths.map((m, index) => {
        return (
            <Tab key={index} eventKey={index} title={m}>
                <AddEntryForm />
                <Days month={index + 1} />
            </Tab>
        )
    }
    )
    return (

        <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => {
                setKey(parseInt(k))
                dispatch(setMonth(parseInt(k)))
            }}
        >
            {monthTabs}
        </Tabs>
    )
}

export default TabSection