import { Subscription, SubscriptionList } from "./components"
import React, { useState } from "react";
import NewSubscription from "./components/New Subsciption/NewSubscription";
import { Filter } from "./components/Filter";

let INITIAL_SUBSCRIPTIONS = [
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
];

function App() {

  const [subscriptions, setSubscriptios] = useState(INITIAL_SUBSCRIPTIONS);
  const [filteredYear, setFilteredYear] = useState('2024');

  const addSubsciption = (data) => {
    setSubscriptios(prevState => {return [data,...subscriptions]});
    console.log("on add subscription :",Subscription);
  }

  const filterChangeHanlder = (data) => {
    setFilteredYear(data);
  }

  const filteredSubscriptions = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // this logic of conditional rendering is moved in SubscriptionList.jsx file
  // let content = <h3>No data found</h3>
  // if(filteredSubscriptions.length !== 0) {
  //   content = filteredSubscriptions.map((subscription) => {
  //     return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
  //   });
  // };
  // console.log("content: "+content);

  return (
    <>
        <NewSubscription onAddSubscription = {addSubsciption} />
        <Filter selectedFilter={filteredYear}  onFilterChange={filterChangeHanlder} />
        <SubscriptionList subscriptions = {filteredSubscriptions} />
    </>
  )
}

export default App
