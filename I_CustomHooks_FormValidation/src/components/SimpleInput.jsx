import React, { useEffect, useRef, useState } from 'react'

const SimpleInput = () => {

    // states and red for name input:
    const [userInput, setUserInput] = useState('');
    const [inputIsValid, setInputIsvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const userInputRef = useRef("");

    // states and ref for email input:
    const [emailInput, setEmailInput] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [isEmailTouched, setIsEmailTouched] = useState(true);
    const emailInputRef = useRef('');

    // state for form:
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(inputIsValid && emailIsValid);
    },[inputIsValid, emailIsValid])

    const changeHandler = (events) => {
        setIsTouched(true);
        setInputIsvalid(true);
        setUserInput(events.target.value);
        console.log("value changed: ",userInput);
        console.log("input field: ",userInputRef.current);
        console.log("user input: ",userInput);
    }

    const onBlurHandler = (events) => {
        setIsTouched(false);
        if(events.target.value.trim().length === 0) {
            setInputIsvalid(false);
        } else {
            setInputIsvalid(true);
        }
    }

    const submitHandler = (events) => {
        events.preventDefault();
        setIsTouched(true);
        if(userInput.trim().length === 0) {
            setInputIsvalid(false);
        }
        if(emailInput.trim().length === 0) {
            setEmailIsValid(false);
        }
        if(!emailIsValid) {
            return;
        }
        if(!inputIsValid) {
            return;
        }
        console.log("inside submit handler:");
        console.log("",userInputRef,userInput);
        setUserInput("");
        setEmailInput("");
        userInputRef.current.value="";
        setIsEmailTouched(false);
        setIsTouched(false);
    }

    const onEmailChangeHandler = (events) => {
        setIsEmailTouched(true);
        setEmailIsValid(true);
        setEmailInput(events.target.value);
    }

    const onEmailBlurHandler = (events) => {
        if(events.target.value.trim().length === 0) {
            setEmailIsValid(false);
        } else {
            setEmailIsValid(true);
        }
    }
    
    const controlClass = inputIsValid || isTouched ? "form-control":"form-control inalid";
    const emailControl = emailIsValid || isEmailTouched ? "form-control":"form-control invalid";
  return (
    <form onSubmit={submitHandler}>
        <div className={controlClass}>
            <label htmlFor="name">Name:</label>
            <input value={userInput} ref={userInputRef} onChange={changeHandler} 
            type="text" placeholder='Enter your name' onBlur={onBlurHandler} />
            {!inputIsValid && <label htmlFor="name">*Username is required.</label>}
        </div>
        <div className={emailControl}>
            <label htmlFor="email">Email:</label>
            <input value={emailInput} type="email" name="email" id="email" onChange={onEmailChangeHandler} 
            onBlur={onEmailBlurHandler} placeholder='Enter your email' />
            {!emailIsValid && <label ref={emailInputRef} htmlFor='email'>*Email is required</label>}
        </div>
        <div className="form-action">
            <button type='submit' disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput