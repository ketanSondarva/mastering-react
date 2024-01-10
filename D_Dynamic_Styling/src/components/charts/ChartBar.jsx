import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
  let barHeight = '0%';
  if(props.maxValue > 0) {
    barHeight = Math.round((props.value/props.maxValue)*100)
  }
  return (
    <>
    {/* <h2 className='color'>color</h2> */}
      <div className='chart-bar-container'>
        {barHeight > 0 && <div className='chart-bar' style={{height: barHeight+20+'px'}}>{barHeight+'%'}</div>}
        {/* {barHeight == 0 && <div className='chart-bar' style={{maxHeight: 2+'px'}}></div>} */}
        <div className='chart-bar-title'>{props.label}</div>
      </div>
    </>
  )
}

export default ChartBar