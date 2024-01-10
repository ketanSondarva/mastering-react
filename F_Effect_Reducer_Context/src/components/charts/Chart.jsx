import React from 'react'
import ChartBar from './ChartBar'
import './ChartBar.css'

const Chart = (props) => {
  const dataSetValues = props.dataSets.map(dataSet => dataSet.value);
  console.log(dataSetValues);
  const max = Math.max(...dataSetValues);
  console.log("max value = "+max);
  // console.log("props dataset: "+props.dataSets.toString());

  return (
    <>
      <h2>Chart: </h2>
      <div className='container'>
        {props.dataSets.map((data) => {
          return <ChartBar value={data.value} label = {data.label} key = {data.label} maxValue = {max}/> 
        })}
      </div>
    </>
  )
}

export default Chart