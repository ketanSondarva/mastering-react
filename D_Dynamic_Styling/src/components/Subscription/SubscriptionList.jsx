import React from 'react'
import Subscription from './Subscription'

const SubscriptionList = (props) => {
    if(props.subscriptions.length == 0) {
        return <h3>No data found</h3>
    }
  return (
    <div>
        {props.subscriptions.map((subscription) => {
            return <Subscription key={subscription.id} title={subscription.title} date={subscription.date} amount={subscription.amount} />
        })}
    </div>
  )
}

export default SubscriptionList