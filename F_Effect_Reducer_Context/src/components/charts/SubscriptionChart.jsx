import React from 'react'
import Chart from './Chart';

const SubscriptionChart = (props) => {

    const chartData = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ];

    for(const subscription of props.filteredSubscriptions) {
        const month = subscription.date.getMonth();
        // console.log(month.toString());
        // console.log(subscription.date.getMonth()); // will give no.: 0-11
        chartData[month].value += subscription.amount;
    }
    console.log(chartData);
    
  return (
    <div>
        <Chart dataSets = {chartData} />
    </div>
  )
}

export default SubscriptionChart