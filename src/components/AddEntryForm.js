import React, { useState } from 'react'
import { Button } from 'react-bootstrap' // import styled-component
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/global.css'

const AddEntryForm = () => {
    const [clicks, setClicks] = useState(0);
    const [ttIn, setTtIn] = useState(0);
    const [ttOut, setTtOut] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

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

    console.log(startDate)
    console.log(typeof (startDate))

    const handleSubmit = (e) => {
        e.preventDefault();
        let splitDate = startDate.toString().split(' ');
        let dayOfWeek = splitDate[0];
        let mth = months[splitDate[1]];
        let day = splitDate[2];
        let year = splitDate[3];

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-row my-2">
                <div className="form-group m-0 d-flex align-items-center justify-content-center flex-row">
                    <label className="ml-3 my-0" style={{ color: "orange" }}>Clicks: </label>
                    <input style={{ backgroundColor: "#495057" }} type="text" placeholder="Clicks..." onChange={(e) => {
                        setClicks(e.target.value)
                    }} />
                    <span className="ml-3" style={{ color: "black" }}>Or</span>
                    <label className="ml-3 my-0" style={{ color: "orange" }}>In: </label>
                    <input style={{ backgroundColor: "#495057" }} type="text" placeholder="In..." onChange={(e) => {
                        setTtIn(e.target.value)
                    }} />

                    <label className="ml-3 my-0" style={{ color: "orange" }}>Out: </label>
                    <input style={{ backgroundColor: "#495057" }} type="text" placeholder="Out..." onChange={(e) => {
                        setTtOut(e.target.value)
                    }} />



                    <DatePicker className="ml-2" id="appDate" selected={startDate} onChange={date => setStartDate(date)} />

                </div>

                {/* end input field */}



                <Button type='submit' className='buttonApp mx-2' variant="success" size="sm">Add</Button>
            </form>
        </>
    )
}

export default AddEntryForm
