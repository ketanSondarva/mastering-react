import { useReducer, useState } from "react"

const useInput = (validateInput) => {
    // const initialInputState = {value:'',isTouched:false};
    // const inputStateReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'INPUT':
    //             return {value:action.value, isTouched:false};
    //         case 'TOUCHED':
    //             return {value:action.value, isTouched:true};
    //         case 'RESET':
    //             return initialInputState;
    //         default:
    //             return initialInputState;
    //     }
    // }

    // const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    const [input, setInput] = useState("");
    const [inputTouched, setInputTouched] = useState(false);
    // above two state handled by reducer
    const [inputIsValid, setInputIsValid] = useState(true);
    // const inputIsValid = validateInput(input);
    // const inputIsValid = validateInput(inputState.value);
    const inputIsInValid = !inputIsValid && inputTouched;

    const changeHandler = (event) => {
        // dispatch({type: 'INPUT', value:event.target.value});
        setInputIsValid(true);
        setInput(event.target.value);
    }

    const blurHandler = (event) => {
        // dispatch({type: 'TOUCHED', value:true});
        setInputIsValid(validateInput(input));
        // setInputTouched(true);
    }

    const reset = () => {
        // dispatch({type:'RESET'});
        setInput("");
        // setInputTouched(false);
    }

    return {input, inputIsValid, inputIsInValid, changeHandler, blurHandler, reset};
}

export default useInput;