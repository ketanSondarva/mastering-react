import Container from "./templates/Container";
import AddSubscriber from './components/AddSubscriber';
import { useState } from "react";
import SubscriberList from "./components/SubscriberList";


function App() {
  const [subscriberList, setSubscriberList] = useState([]);
  const onAddSubscriberHandler = (sname, spincode) => {
    setSubscriberList((prevstate) => {
      return [...prevstate, {name:sname, pincode:spincode, id:Math.random().toString()}];
    });
  }
  return (
    <>
      <Container>
        <AddSubscriber onAddSubscriber = {onAddSubscriberHandler} />
        <SubscriberList list = {subscriberList}/>
      </Container>
    </>
  )
}

export default App
