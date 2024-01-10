import React from 'react'
import SubsciptionContext from './subscriptions-context'

const SubscriptionContextProvider = (props) => {
  return (
    <SubsciptionContext.Provider value={props.value}>
        {props.children}
    </SubsciptionContext.Provider>
  )
}


// we can also create context here and use it:
// const SubscriptionsContext = React.createContext({subsciptionList:[]})
export default SubscriptionContextProvider