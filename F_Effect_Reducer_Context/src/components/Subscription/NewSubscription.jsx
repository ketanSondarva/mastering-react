import React, { useState } from 'react'
import FormSubscription from './FormSubscription'

const NewSubscription = (props) => {
    const [showForm, setShowForm] = useState(false);
    const onSaveHandler = (data) => {
        const subscriptionData = {...data,id:Math.random().toString()};
        props.onAddSubscription(subscriptionData);
        console.log("on save",subscriptionData);
    }

    const onClickHandler = () => {
      setShowForm(true);
      console.log('show form:'+showForm);
    }

    const hideForm = () => {
      setShowForm(false);
      console.log('hide form:'+hideForm);
    }

  return (
    <div>
        {showForm && <FormSubscription onSave = {onSaveHandler} onCancel = {hideForm} />}
        {!showForm && <button type='button' onClick={onClickHandler}>Add new subscription</button>}
    </div>
  )
}

export default NewSubscription