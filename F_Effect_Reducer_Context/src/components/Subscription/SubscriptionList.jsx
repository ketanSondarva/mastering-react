import React, { useContext } from 'react'
import Subscription from './Subscription'
import SubsciptionContext from './Context/subscriptions-context'

const SubscriptionList = (props) => {
    const ctx = useContext(SubsciptionContext);

    if(ctx.subscriptions.length == 0) {
        return <h3>No data found</h3>
    }
 
  return (
    // way 1: to consume the context by enclosing tags:
    // <SubsciptionContext.Consumer>
    //   {(ctx) => {
    //     <div>
    //       {ctx.subscriptions.map((subscription) => {
    //           return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
    //       })}
    //     </div>
    //   }}
    // </SubsciptionContext.Consumer>

    // way 2: to consume the context: (created 'const ctx' using useContext()):
    <div>
          {ctx.subscriptions.map((subscription) => {
              return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
          })}
    </div>


  // <div>
  // {props.subscriptions.map((subscription) => {
  //     return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
  // })}
  // </div>
  )
}

export default SubscriptionList