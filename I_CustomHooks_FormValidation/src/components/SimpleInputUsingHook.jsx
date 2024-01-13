import React from 'react'
import useInput from '../hooks/use-input'

const SimpleInputUsingHook = () => {

   const {input:enteredName, inputIsValid:nameIsValid, inputIsInValid:nameIsInValid, 
    changeHandler:nameChangeHandler, blurHandler:nameBlurHandler, 
    reset:resetName} = useInput(value => value.toString().trim().length !== 0);

    const {input:enteredEmail, inputIsValid:emailIsValid, inputIsInValid:emailIsInValid, 
    changeHandler:emailChangeHandler, blurHandler:emailBlurHandler, 
    reset:resetEmail} = useInput(value => value.toString().includes("@"));

    const submitHandler = (event) => {
      event.preventDefault();
      if(!nameIsValid) return;
      if(!emailIsValid) return;
      resetName();
      resetEmail();
    }

    const controlClass = nameIsInValid ? "form-control":"form-control name-invalid";
    const emailControl = emailIsValid ? "form-control": "form-control email-invalid";
    
    const formIsValid = nameIsValid && emailIsValid;
  return (
    <form onSubmit={submitHandler}>
        <div className={controlClass}>
            <label htmlFor="name">Name:</label>
            <input value={enteredName} onChange={nameChangeHandler} 
            type="text" placeholder='Enter your name' onBlur={nameBlurHandler} />
            {!nameIsValid && <label htmlFor="name">*Username is required.</label>}
        </div>
        <div className={emailControl}>
            <label htmlFor="email">Email:</label>
            <input value={enteredEmail} type="email" name="email" id="email" onChange={emailChangeHandler} 
            onBlur={emailBlurHandler} placeholder='Enter your email' />
            {!emailIsValid && <label htmlFor='email'>*Email is required field and must consist '@'</label>}
        </div>
        <div className="form-action">
            <button type='submit' disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInputUsingHook