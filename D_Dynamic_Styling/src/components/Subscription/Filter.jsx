import React, { useState } from 'react'

export const Filter = (props) => {
    // const [filteredYear, setFilteredYear] = useState('2024');
    const onSlectHandler = (event) => {
        console.log("onSelect Handler",event.target.value);
        // setFilteredYear(event.target.value);
        props.onFilterChange(event.target.value);
    }

  return (
    <div style={{marginTop: '20px'}}>
        <label htmlFor="filter">Filter By Year </label>
        <select value={props.selectedFilter} onChange={onSlectHandler} name="filter" id="filter">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
    </div>
  )
}


