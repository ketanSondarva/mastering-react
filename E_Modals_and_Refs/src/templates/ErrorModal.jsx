import React from 'react'
import ReactDOM from "react-dom"
import Container from './Container'
import Button from './Button'
import './ErrorModal.css'
import { Fragment } from 'react'



const Backdrop = (props) => {
   return <div className="backdrop" onClick={props.onClose}></div>
}

const Overlays = (props) => {
  return (
    <Container className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p className='content'>{props.content}</p>
            </div>
            <footer className='actions' onClick={props.onClose}>
              <Button onClick={props.onClose}>okay</Button>
            </footer>
    </Container> 
  )
}

const ErrorModal = (props) => {
  // return (
  //   <div className="backdrop" onClick={props.onClose}>
  //       <Container className='modal'>
  //           <header className='header'>
  //               <h2>{props.title}</h2>
  //           </header>
  //           <div>
  //               <p className='content'>{props.content}</p>
  //           </div>
  //           <footer className='actions'><Button>okay</Button></footer>
  //       </Container>
  //   </div>
  // )
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>, 
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlays onClose={props.onClose} title={props.title} content={props.content}></Overlays>, 
        document.getElementById('backdrop-root')
      )}
    </Fragment>
  );
}

export default ErrorModal