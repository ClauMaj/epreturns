import React, { useState } from 'react'
import { Button } from 'react-bootstrap' // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/global.css'
import { addCraftEntry } from '../../actions/actions'
import { toast } from "react-toastify";

const AddEntryForm = () => {
    const [ttIn, setTtIn] = useState('');
    const [ttOut, setTtOut] = useState('');
    const [bp, setBp] = useState('');
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

        dispatch(addCraftEntry({ dayOfWeek, mth, dayName, year, ttIn, ttOut, bp }))
        toast.success(`Your entry was saved!`);
        setTtIn('');
        setTtOut('');
        setBp('');
    }

    return (
        <>
            <form id="addEntryForm" onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-row mt-4">
                <div className="form-group m-0 d-flex align-items-center justify-content-center flex-row">
                    <label className="ml-3 mr-1 my-0" style={{ color: "orange" }}>TT In: </label>
                    <input required style={{ backgroundColor: "#495057" }} type="number" placeholder="In..." value={ttIn} onChange={(e) => {
                        setTtIn(e.target.value)
                    }} />
                    <label className="ml-3 mr-1 my-0" style={{ color: "orange" }}>TT Out: </label>
                    <input required style={{ backgroundColor: "#495057" }} type="number" placeholder="Out..." value={ttOut} onChange={(e) => {
                        setTtOut(e.target.value)
                    }} />
                    <label className="ml-3 mr-1 my-0" style={{ color: "orange" }}>BP: </label>
                    <input required style={{ backgroundColor: "#495057" }} type="text" placeholder="BP..." value={bp} onChange={(e) => {
                        setBp(e.target.value)
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
