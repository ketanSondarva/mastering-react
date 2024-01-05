import { Subscription } from "./components"
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

  

  /* // this approach used in last project, no need to manage state for it(Problem seen on previous project, explained in README):

  // addSubscription() was here
  let currYearPlans = subscriptions.filter((elem) => elem.date.getFullYear().toString() == '2024');

  const [filterdSubscriptions, setFilteredSubscriptions] = useState(currYearPlans);

  const [filteredYear, setFilteredYear] = useState('2024');
  const filterChangeHanlder = (year) => {
    setFilteredYear(year);
    let filteredPlans = subscriptions.filter((elem) => elem.date.getFullYear().toString() == year);
    console.log(filteredPlans);
    setFilteredSubscriptions(filteredPlans);
    console.log('provided year: '+year);
  }
  */

  const addSubsciption = (data) => {
    // subscriptions.push(data);
    // setSubscriptios([...subscriptions]);  // or if we want to add newly added plan at the top:
    // setSubscriptios([data,...subscriptions]);  // we are not pushing element in array, changes only happens in UI
   
    setSubscriptios(prevState => {return [data,...subscriptions]});
    /* if(data.date.getFullYear() == filteredYear) {
    //   filterChangeHanlder(filteredYear);
    // } */
    console.log("on add subscription :",Subscription);
  }

  const filterChangeHanlder = (data) => {
    setFilteredYear(data);
  }

  const filteredSubscriptions = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let content = <h3>No data found</h3>
  if(filteredSubscriptions.length !== 0) {
    content = filteredSubscriptions.map((subscription) => {
      return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
    });
  };

  console.log("content: "+content);

  return (
    // React.createElement('div',{},React.createElement('h2',{},'lets start!')) // you need to import React to execute this line
    <>
      {/* <Subscription date={date} title={title} amount={amount} /> */}
        <NewSubscription onAddSubscription = {addSubsciption} />
        <Filter selectedFilter={filteredYear}  onFilterChange={filterChangeHanlder} />
        {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} /> */}

        {/* {subscriptions.map((elem) => {
          return (
            <Subscription key={elem.id} date={elem.date} title={elem.title} amount={elem.amount} />
          )
        })} */}

        {/* new addons: */}

        {/* {subscriptions.map((elem,index) => <Subscription key={index} date={elem.date} title={elem.title} amount={elem.amount} /> )}; */}

       {/* {subscriptions.filter((item) => {
          return item.date.getFullYear().toString() === filteredYear;
       }).map((elem) => 
          <Subscription key={elem.id} date={elem.date} title={elem.title} amount={elem.amount} /> 
       )}; */}

       {/* or we can use direct filteredSubscriptions, defined above */}

      {/* {
      filteredSubscriptions.length === 0 ? <h3> no data found </h3> : 
      filteredSubscriptions.map((elem) => <Subscription key={elem.id} date={elem.date} title={elem.title} amount={elem.amount} />)
      } */}

      {/* {filteredSubscriptions.length === 0 && <h3>no data found</h3>}
      {filteredSubscriptions.length !== 0 &&
       filteredSubscriptions.map((subscription) =>
       <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />)
      } */}

      {/* we can use this instead:  */}
      {content}
    </>
  )
}

export default App
