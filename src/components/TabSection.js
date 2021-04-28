import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from "react-router-dom";
import * as StyledC from "./styles/Styles"
import { Button } from 'react-bootstrap' // import styled-component

const TabSection = () => {
    const [key, setKey] = useState('home');
    return (

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Home">

            </Tab>
            <Tab eventKey="profile" title="Profile">

            </Tab>
            <Tab eventKey="contact" title="Contact" >

            </Tab>
        </Tabs>
    )
}

export default TabSection