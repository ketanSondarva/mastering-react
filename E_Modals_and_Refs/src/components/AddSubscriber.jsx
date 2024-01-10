import React from 'react'
import Container from '../templates/Container';
import Button from '../templates/Button';
import { useState, useRef } from 'react';
import ErrorModal from '../templates/ErrorModal';

const AddSubscriber = (props) => {
    // const nameInputRef = useRef('ketan');
    // const pincodeInputRef = useRef('');
    const [name, setName] = useState('');
    const [pincode, setPincode] = useState('');
    const [error, setError] = useState(null);

    const onNameChangeHandler = (events) => {
      console.log(events);
      setName(events.target.value);
    }

    const onPincodeChangeHandler = (events) => {
      console.log(events);
      setPincode(events.target.value);
    }

    // note: if we use ref insead of state it will make component uncontrollable, however refs and state serves different purpose.
    
    const onSubmitHandler = (events) => {
        events.preventDefault();
        // const length = nameInputRef.current.trim().length(); // will give error: nameInputRef.current.trim is not function 
        console.log(length);
        // if(nameInputRef.current.value.toString().trim().length == 0) {
        if(name.trim().length == 0) {
          console.log('you must provide name');
          setError({title:'Invalid Name', content:'Name is the manadatory field, please provide the name'});
          return;
        }
        if(pincode.trim().length == 0) {
          console.log('you must provide pincode');
          setError({title:'Invalid pincode', content:'pincode is the manadatory field, please provide the pincode'});
          return;
        }
        if(pincode.length != 5 || pincode < 0) {
          console.log('please enter valid pincode, length must be 5');
          setError({title:'Invalid pincode', content:'pincode must be 5 digit long, please provide valid pincode'});
          return;
        }

        // console.log("nameInputRef"+nameInputRef);
        // console.log("nameInputRef current:"+nameInputRef.current);
        // props.onAddSubscriber(nameInputRef.current.value, pincodeInputRef.current.value);
        props.onAddSubscriber(name, pincode);
        console.log(`pincode length: ${pincode.length}`);
        console.log("response recorded");
        // nameInputRef.current = '';
        setName('');
        setPincode('');
    }

    const onCloseHandler = () => {
      setError(null);
    }
  return (
    <div> 
        {/* { error && `<ErrorModal title=${error.title} content = ${error.content} />` } */}
        { error && <ErrorModal title = {error.title} content = {error.content} onClose = {onCloseHandler} /> }
        <div className='center'>
          <div>
            <form onSubmit={onSubmitHandler}>
                <Container className = "container">
                  <div className='input-container'>
                    <label htmlFor="name">Name:</label>
                    {/* <input ref={nameInputRef} onChange={onNameChangeHandler} className='input' placeholder='Enter your name' type="text" id='name' name='name' /> */}
                    <input value={name} onChange={onNameChangeHandler} className='input' placeholder='Enter your name' type="text" id='name' name='name' />
                  </div>
                  <div className='input-container'>
                    <label htmlFor="pincode">Pincode:</label>
                    {/* <input ref={pincodeInputRef} value={pincode} onChange={onPincodeChangeHandler} className='input' placeholder='Enter pincode' type="number" name="pincode" id="pincode" /> */}
                    <input value={pincode} onChange={onPincodeChangeHandler} className='input' placeholder='Enter pincode' type="number" name="pincode" id="pincode" />
                  </div>
                  <Button type='submit'>Save</Button>
                </Container>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AddSubscriber