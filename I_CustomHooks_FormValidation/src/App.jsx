import { useCallback } from "react";
import useTime from "./hooks/time"
import useSendRequest from "./hooks/sendRequest";
import SimpleInput from "./components/SimpleInput";
import SimpleInputUsingHook from "./components/SimpleInputUsingHook";

function App() {

  const currentTime = useTime(5000);

  const handleFetchData = useCallback((data) => {
    console.log("inside handle fetch data");
    console.log(data);
    const studentInfo = data;
    studentInfo.forEach((student) => {
      console.log(student.name);
    });
  },[]);

  const {isLoading,error,sendRequest:sendFetchApi} = useSendRequest(handleFetchData);

  const fetchApiHandler = useCallback( async () => {
    sendFetchApi({url:'http://localhost:8080/api/v1/student/'}); // Student_Entity SB project
    console.log("inside fetch api handler");
  },[]);
  
  return (
   <div>
    {/* <button type="button" onClick={fetchApiHandler}>Send Request</button> */}

    {/* <SimpleInput /> */}

    <SimpleInputUsingHook />
   </div>
  )
}

export default App
