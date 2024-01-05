import { Subscription } from "./components"
import React, { useState } from "react";
import NewSubscription from "./components/New Subsciption/NewSubscription";
import { Filter } from "./components/Filter";

function App() {

  let date = (new Date('2023','3','23'));
  let title = "Monthly Subscription";
  let amount = '125.60';

  let subscriptions = [
    {
      id: "1",
      date: (new Date('2024 1 30')),
      title: "Monthly Subscription",
      amount: "125.00"
    },
    {
      id: "2",
      date: (new Date('2024 12 28')),
      title: "Annual Subscription",
      amount: "1125.00"
    },
    {
      id: "3",
      date: (new Date('2024 09 05')),
      title: "Quarterly Subscription",
      amount: "425.00"
    },
    {
      id: "4",
      date: (new Date('2023 12 28')),
      title: "Annual Subscription",
      amount: "1125.00"
    },
    {
      id: "5",
      date: (new Date('2022 09 05')),
      title: "Quarterly Subscription",
      amount: "425.00"
    }
  ]

  // addSubscription() was here

  let currYearPlans = subscriptions.filter((elem) => elem.date.getFullYear().toString() == '2024');

  const [filterdSubscriptions, setFilteredSubscriptions] = useState(currYearPlans);

  const [filteredYear, setFilteredYear] = useState('2024');
  const filterChangeHanlder = (data) => {
    setFilteredYear(data);
    let filteredPlans = subscriptions.filter((elem) => elem.date.getFullYear().toString() == data);
    console.log(filteredPlans);
    setFilteredSubscriptions(filteredPlans);
    console.log('provided year: '+data);
  }

  const addSubsciption = (data) => {
    subscriptions.push(data);
    if(data.date.getFullYear() == filteredYear) {
      filterChangeHanlder(filteredYear);
    }
    console.log("on add subscription :",data);
  }

  // const changeValue = () => {

  // }


  return (
    // React.createElement('div',{},React.createElement('h2',{},'lets start!')) // you need to import React to execute this line
    <>
      {/* <Subscription date={date} title={title} amount={amount} /> */}
        <NewSubscription onAddSubscription = {addSubsciption} />
        <Filter selectedFilter={filteredYear}  onFilterChange={filterChangeHanlder} />
        {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} /> */}

        {filterdSubscriptions.map((elem) => {
          return (
            <Subscription key={elem.id} date={elem.date} title={elem.title} amount={elem.amount} />
          )
        })}

        {/* {subscriptions.filter((subscription) => {
          subscription.date.getFullYear.toString() == filteredData;
        })} */}
    </>
  )
}

export default App
