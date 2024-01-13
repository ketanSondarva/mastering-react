import { useCallback, useState } from 'react'
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import Article from './components/Classes/Article';
import ErrorBoundries from './components/Classes/ErrorBoundries';

function App() {
  console.log("App component");  // to check component re-evaluation
  const [show, setShow] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  // const onCLickHandler = () => {
  //   setShow(!show);
  // }

  // see how component re-evaluation got stopped by runnin application
  const onCLickHandler = useCallback(() => {
    console.log('on click useCallback');
    
    console.log('authorize: ',authorized);
    if(authorized) {
      setShow((prevState) => !prevState);
      setAuthorized(false);
      console.log('state schedule: ',show,authorized);
    }
  },[authorized])

  const authorizedHanlder = () => {
    console.log('authorize handler');
    setAuthorized(true);
    console.log(authorized);
  }

  return (
    <ErrorBoundries>
      <div>
        {/* {show && <p>This is simple paragraph show conditionally</p>} */}

        {/* <Button type="button" onClick={authorizedHanlder} name="authorized" /> */}

        <Article />
        <button onClick={authorizedHanlder}>Authorization</button>
        <Paragraph show = {show} list={['this is conditionally, click on button to hide or show']} />

        {/* <button type='button' onClick={onCLickHandler}>Click me</button> */}

        <Button type="button" onClick = {onCLickHandler} name = "Click me" />

      </div>
    </ErrorBoundries>
  )
}

export default App
