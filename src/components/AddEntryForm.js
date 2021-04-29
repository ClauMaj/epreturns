import React, { useState } from 'react'
import { Button } from 'react-bootstrap' // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/global.css'
import { addEp2Entry } from '../actions/actions'

const AddEntryForm = () => {
    const [ttIn, setTtIn] = useState('');
    const [ttOut, setTtOut] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    console.log(ttIn)
    // receive dispatch functions
    const dispatch = useDispatch()

    let months = {
        Jan: "0",
        Feb: "1",
        Mar: "2",
        Apr: "3",
        May: "4",
        Jun: "5",
        Jul: "6",
        Aug: "7",
        Sep: "8",
        Oct: "9",
        Nov: "10",
        Dec: "11"
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let splitDate = startDate.toString().split(' ');
        let dayOfWeek = splitDate[0];
        let mth = months[splitDate[1]];
        let dayName = splitDate[2];
        let year = splitDate[3];

        dispatch(addEp2Entry({ dayOfWeek, mth, dayName, year, ttIn, ttOut }))

        setTtIn('');
        setTtOut('');
    }

    return (
        <>
            <form id="addEntryForm" onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-row my-2">
                <div className="form-group m-0 d-flex align-items-center justify-content-center flex-row">
                    <label className="ml-3 mr-1 my-0" style={{ color: "orange" }}>TT In: </label>
                    <input required style={{ backgroundColor: "#495057" }} type="number" placeholder="In..." value={ttIn} onChange={(e) => {
                        setTtIn(e.target.value)
                    }} />
                    <label required className="ml-3 mr-1 my-0" style={{ color: "orange" }}>TT Out: </label>
                    <input style={{ backgroundColor: "#495057" }} type="number" placeholder="Out..." value={ttOut} onChange={(e) => {
                        setTtOut(e.target.value)
                    }} />

                    <DatePicker className="ml-2" id="appDate" selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                {/* end input field */}



                <Button type='submit' className='buttonApp mx-2' variant="success" size="sm">Add Entry</Button>
            </form>
        </>
    )
}

export default AddEntryForm
