import { Subscription } from "./components"
import React from "react";

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
    }
  ]

  return (
    // React.createElement('div',{},React.createElement('h2',{},'lets start!')) // you need to import React to execute this line
    <>
      {/* <Subscription date={date} title={title} amount={amount} /> */}

        <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount} />
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount} />
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount} />
    </>
  )
}

export default App
