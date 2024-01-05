import React from 'react'
import FormSubscription from '../FormSubscription'

const NewSubscription = (props) => {
    const onSaveHandler = (data) => {
        const subscriptionData = {...data,id:Math.random().toString()};
        props.onAddSubscription(subscriptionData);
        console.log("on save",subscriptionData);
    }
  return (
    <div>
        <FormSubscription onSave = {onSaveHandler} />
    </div>
  )
}

export default NewSubscription