import React, { useEffect, useReducer, useState } from 'react'
import './Stylesheets/subscription.css';

const formReducerFn = (latestState, action) => {
    console.log("reducer function: "+latestState+" "+action.type);
    switch (action.type) {
        case 'TITLE':
            return {...latestState, userTitle: action.val};
        case 'DATE':
            return {...latestState, userDate: action.val};
        case 'AMOUNT':
            return {...latestState, userAmount: action.val};
        case 'RESET':
            return {userTitle:'Enter subscription title',userDate:'',userAmount:''};
        default:
            return {userTitle:'Enter title', userDate:'', userAmount:'Enter amount'};
    }
}

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

    // template of useReducer: useReducer(reducerFunction, stateList, dispatcherFunction);
    // const [myState, setMyState] = useReducer(() => {}, 'state', () => {});

    const [formReducer, setFormReducer] = useReducer(formReducerFn, {userTitle:'', userDate:'', userAmount:''});
    const [form, setForm] = useState({userTitle:'',userDate:'',userAmount:''});
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if(formReducer.userTitle.trim().length > 0) {
                setIsValid(true);
            }
        }, 500);
        return () => {
            clearTimeout(timeId);
        }
    }, [formReducer.userTitle]);

    const titleChangeHandler = (event) => {
        console.log("user title: "+formReducer.userTitle);
        // if(event.target.value.trim().length > 0) {
        //     setIsValid(true);
        // } // see the useEffect() defined above
        setFormReducer({type:'TITLE', val:event.target.value});
        // setForm((prevState) => {
        //     return {...prevState,userTitle:event.target.value};
        // });
        // console.log(form);
    }

    const dateChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setFormReducer({type:'DATE', val:event.target.value});
        // setForm((prevState) => {
        //     return {...prevState,userDate:event.target.value};
        // });
        // console.log(form);
    }

    const amountChangeHandler = (event) => {
        setFormReducer({type:'AMOUNT', val:event.target.value});
        // setForm((prevState) => {
        //     return {...prevState,userAmount:event.target.value};
        // });
        // console.log(form);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formReducer.userTitle.trim().length == 0) {
            setIsValid(false);
            return; 
        }
        const Subsciption = {title:formReducer.userTitle,amount:formReducer.userAmount,date:new Date(formReducer.userDate)};
        props.onSave(Subsciption);
        console.log("on submit",Subsciption);
        // setForm((prevState) => {
        //     return {...prevState,userAmount:'',userTitle:'',userDate:''};
        // });
        setFormReducer({type:'RESET'});
        setIsValid(true);
    }

  return (
    <div className='subscription'>
        <h2>Add Subsciption</h2>
        <form onSubmit={submitHandler}>
            <div className='form-components'>
                {/* <label style={{color: !isValid?'red':'black'}}  htmlFor="title">title</label>
                <input style={{borderColor: isValid?'black':'red'}} placeholder='Enter title' onChange={titleChangeHandler} value={form.userTitle} type="text" name="title" id="title" /> */}
            
                <label className={`${isValid?'':'red_label'}`} htmlFor="title">title</label>
                <input className={`${isValid?'':'red_border'}`} placeholder='Enter title' onChange={titleChangeHandler} value={formReducer.userTitle} type="text" name="title" id="title" />

                <label htmlFor="date">date</label>
                <input onChange={dateChangeHandler} value={formReducer.userDate} type="date" name="date" id="date" />
            
                <label className={`${isValid?'':'red_label'}`} htmlFor="amount">amount</label>
                <input className={`${isValid?'':'red_border'}`} onChange={amountChangeHandler} value={formReducer.userAmount} placeholder='Enter amount' type="text" name="amount" id="amount" />
           
                <div>
                    <button type="submit">Add Subscription</button>
                    <button type='button' onClick={props.onCancel} className='danger'>Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormSubscription