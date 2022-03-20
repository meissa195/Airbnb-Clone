import React, { useState } from 'react'
import {DateRangePicker} from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import {Button} from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"
import { useHistory } from 'react-router-dom'

// date picker
function Search() {
    const history = useHistory();
    // start date
    const [startDate, setStartDate] = useState(new Date())
    // end date
    const [endDate, setEndDate] = useState (new Date())
    // selection range object from date api
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    // function from api to set selection dates
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]}
        onChange={handleSelect} />
        <h2>
            Number of guests
            <PeopleIcon />
        </h2>
        <input type="number" min={0} defaultValue={2} />
        <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search