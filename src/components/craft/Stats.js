import React, { useState } from 'react'
import { Button } from 'react-bootstrap' // import styled-component
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/global.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMu } from '../../actions/actions'
import { toast } from "react-toastify";
import MuStats from './MuStats'

const Stats = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [mu, setMu] = useState('');
    const [activity, setActivity] = useState('craft');
    const selectedYear = useSelector(state => state.selectedYear)
    const allSessions = useSelector(state => state[selectedYear].craft)

    let totalTtIn = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttIn)
    }, 0)

    let totalTtOut = allSessions.reduce((acc, curr) => {
        return acc + parseInt(curr.ttOut)
    }, 0)
    let percent = (totalTtOut * 100 / totalTtIn || 0).toFixed(2)


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
    const handleMuSubmit = (e) => {
        e.preventDefault();
        let splitDate = startDate.toString().split(' ');
        let mth = months[splitDate[1]];
        let year = splitDate[3];

        dispatch(addMu({ mth, year, mu, activity }))
        toast.success(`Your entry was saved!`);
        setMu('');
    }

    return (
        <>
            <p> Global stats<span className="handAlign">&#9758;</span> &emsp; Total In: {totalTtIn} <span style={{ color: "black" }}>|</span> Total Out: {totalTtOut} <span style={{ color: "black" }}> | </span> Total PED: {totalTtOut - totalTtIn} <span style={{ color: "black" }}>|</span> Return: {percent}% </p>
            <MuStats />
            <form id="addMu" onSubmit={handleMuSubmit} className="d-flex align-items-center justify-content-center flex-row mb-4  mt-4">
                <div className="form-group m-0 d-flex align-items-center justify-content-center flex-row">
                    <label className="ml-3 mr-1 my-0" style={{ color: "orange" }}>Add Markup: </label>
                    <input required style={{ backgroundColor: "#495057" }} type="number" placeholder="Markup..." value={mu} onChange={(e) => {
                        setMu(e.target.value)
                    }} />

                    <div className="mx-3 form-group-select my-0">
                        <label className=" my-0 mr-2" style={{ color: "orange" }}>Activity:</label>
                        <select className="form-select form-select-lg appDate" onChange={(e) => { setActivity(e.target.value) }}>
                            <option key="craft" value="craft">Craft</option>
                            <option key="hunt" value="hunt">Hunt</option>
                            <option key="mining" value="mining">Mining</option>
                        </select>
                    </div>

                    <DatePicker className="ml-2 appDate" selected={startDate} onChange={date => setStartDate(date)} dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                        showTwoColumnMonthYearPicker />
                </div>
                {/* end input field */}



                <Button type='submit' className='buttonApp mx-2' variant="success" size="sm">Add Mu</Button>
            </form>
        </>
    )
}

export default Stats
