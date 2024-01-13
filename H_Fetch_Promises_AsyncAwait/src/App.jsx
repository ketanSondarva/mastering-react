import { useCallback, useEffect, useState } from "react";

// note: used the api of Student_Entity project
function App() {

  // first : fetch using promises:
  // const onClickHandler = () => {
  //   fetch("http://localhost:8080/api/v1/student/").then((response) => {
  //     console.log('fetched data', response, response.json);
  //     return response.json();
  //   }).then((data) => {
  //     // transform:
  //     console.log(data);
  //   })
  // }


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // second : fetch using async await 
    // const onClickHandler = async () => {
    //   setIsLoading(true);
    //   const response = await fetch("http://localhost:8080/api/v1/student/");
    //   const data = await response.json();
    //   const transformedData = data;
    //   console.log(transformedData);
    //   setIsLoading(false);
    // }

    // third : fetch and error handling using promises:
    // const onClickHandler = () => {
    //   setIsLoading(true);
    //   fetch("http://localhost:8080/api/v1/student/").then((response) => {
    //     return response.json();
    //   }).then((data) => {
    //     console.log(data);
    //     console.log(typeof data);
    //   }).catch((e) => {
    //       setError(e.message);
    //       console.log(error);
    //   })
    //   setIsLoading(false);
    // }


    // will be evaluated first: before the api call:
    // let getdata = null;
    // useEffect(() => {
    //   getdata = onClickHandler();
    // },[]);
    // console.log("get data: ",getdata);


    // forth : fetch and error handling using async await:

    // const onClickHandler = async () => {
    //   try {
    //     setIsLoading(true);
    //     const response = await fetch("http://localhost:8080/api/v1/student/");
    //     if(!response.ok) {
    //       throw new Error("something went wrong, code: ",response.status+" msg: "+response.statusText);
    //     }
    //     const data = response.json();
    //     console.log("data: ",data);
    //     console.log("data: "+data); // to see the diff between this line and above one
    //     setIsLoading(false);
    //   } catch(e) {
    //     setIsLoading(false); 
    //     setError(e.message);
    //   }
    // }

    // note: fetching api on button click, instead having useEffect
    // for that we will call the handler in useEffect function and pass entry array of depnedencies.
    // should pass the handler itself as dependency if we are using an external state.
    // ... but as we know functions are objects in JS, everytime the component gets re-evaluated it will call api.

    // fifth : calling fetch api using useCallback:

    const onClickHandler = useCallback(() => {
      setIsLoading(true);
      fetch("http://localhost:8080/api/v1/student/").then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        setError(e);
      })
      setIsLoading(false);
    },[])
    

    // post request: full stack completed !! congratulations
    const addStudentHandler = (data) => {
      fetch("http://localhost:8080/api/v1/student/create", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'content-type':'application/json'}
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
      }).catch((e) => {
        setError(e);
        console.log(e);
      })
    }

    const onAddStudent = () => {
      const data = {
        "name": "mahek gohil",
        "address": "shrinagar boys pg, ahmedabad",
        "mobileNo": "9924252833",
        "email": "mahekg23@gmail.com"
      }
      addStudentHandler(data);
    }

  return (
    <div>
      {isLoading && <p>Your data is loading...</p>}
      {!isLoading && <button onClick={onClickHandler}>Get All Student</button>}
      {!isLoading && <button onClick={onAddStudent}>Add Student</button>}
      {/* {!isLoading && error && <p>{error}</p> } */}
    </div>
  )
}

// congratulations 🔥❤️🎉

export default App
