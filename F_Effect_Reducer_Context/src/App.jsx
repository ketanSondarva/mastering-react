import { Subscription, SubscriptionList } from "./components"
import React, { useEffect, useState } from "react";
import './components/Subscription/NewSubscription';
import { Filter } from "./components/Subscription/Filter";
import NewSubscription from "./components/Subscription/NewSubscription";
import SubscriptionChart from "./components/charts/SubscriptionChart";
import SubsciptionContext from "./components/Subscription/Context/subscriptions-context";
import SubscriptionContextProvider from "./components/Subscription/Context/SubscriptionContextProvider";

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

  // will give error: too many re-rendres
  // if(localStorage.getItem('filteredYear')) {
  //   setFilteredYear(localStorage.getItem('filteredYear'));
  // }

  // it will execute only once:
  useEffect(() => {
    if(localStorage.getItem('filteredYear')) {
      setFilteredYear(localStorage.getItem('filteredYear'));
    }
  }, [])

  const addSubsciption = (data) => {
    setSubscriptios(prevState => {return [data,...subscriptions]});
    console.log("on add subscription :",Subscription);
  }

  const filterChangeHanlder = (data) => {
    setFilteredYear(data);
    localStorage.setItem('filteredYear',data);
    console.log(localStorage.getItem('filteredYear'));
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
       
        {/* <SubsciptionContext.Provider value={{subscriptions:[], dummy:filterChangeHanlder}}>
          <SubscriptionChart filteredSubscriptions = {filteredSubscriptions} />
          <h2>Subscripton List: </h2>
          <SubscriptionList subscriptions = {filteredSubscriptions} />
        </SubsciptionContext.Provider> */}

        {/* custom provider example: */}
        <SubscriptionContextProvider value={{subscriptions:filteredSubscriptions}}>
          <SubscriptionChart filteredSubscriptions = {filteredSubscriptions} />
          <h2>Subscripton List: </h2>
          <SubscriptionList subscriptions = {filteredSubscriptions} />
        </SubscriptionContextProvider>

    </>
  )
}

export default App
