import React, { useState } from 'react'
import '../subscription.css';

const FormSubscription = (props) => {

    // const [userTitle, setUserTitle] = useState("");
    // const [userDate, setUserDate] = useState("");
    // const [userAmount, setUserAmount] = useState("");

    /*
    // another approach of storing state:
    // here we can use single state for all three as they are the part of single form:
    const [form, setForm] = useState({userTitle:'',userDate:'',userAmount:''});

    // when we update value of any state we have to update all three fields,
    // because it overrides the old version
    const titleChangeHandler = (event) => {
        // setUserTitle(event.target.value);
        setForm({...form,userTitle:event.target.value})
        console.log("onTitleChange", event, event.target.value);
    }   

    const dateChangeHandler = (event) => {
        // setUserDate(event.target.value);
        setForm({...form,userDate:event.target.value})
    }

    const amountChangeHandler = (event) => {
        // setUserAmount(event.target.value);
        setForm({...form,userAmount:event.target.value})
    }

    */

    const [form, setForm] = useState({userTitle:'Enter subscription title',userDate:'',userAmount:'Enter amount'});

    const titleChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState,userTitle:event.target.value};
        });
        console.log(form);
    }

    const dateChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState,userDate:event.target.value};
        });
        console.log(form);
    }

    const amountChangeHandler = (event) => {
        setForm((prevState) => {
            return {...prevState,userAmount:event.target.value};
        });
        console.log(form);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const Subsciption = {title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)};
        props.onSave(Subsciption);
        console.log("on submit",Subsciption);
        setForm((prevState) => {
            return {...prevState,userAmount:'',userTitle:'',userDate:''};
        });
    }

  return (
    <div className='subscription'>
        <h2>Add Subsciption</h2>
        <form onSubmit={submitHandler}>
            <div className='form-components'>
                <label htmlFor="title"></label>
                <input placeholder='Enter title' onChange={titleChangeHandler} value={form.userTitle} type="text" name="title" id="title" />
            
                <label htmlFor="date"></label>
                <input onChange={dateChangeHandler} value={form.userDate} type="date" name="date" id="date" />
            
                <label htmlFor="amount"></label>
                <input onChange={amountChangeHandler} value={form.userAmount} placeholder='Enter amount' type="text" name="amount" id="amount" />
           
                <button type="submit">Add Subscription</button>
            </div>
        </form>
    </div>
  )
}

export default FormSubscription