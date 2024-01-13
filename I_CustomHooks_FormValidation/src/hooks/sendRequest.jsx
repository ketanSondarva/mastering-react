import { useState } from "react"

const useSendRequest = (handleData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const sendRequest = async (requestConfig) => {
        console.log("fetch request called");
        try {
            setIsLoading(true);
            const response =  await fetch(requestConfig.url, {
                method:requestConfig.method,
                body:requestConfig.body,
                headers:requestConfig.headers
            });
            // console.log(response.json());
            const data = await response.json();
            // console.log("data: ",data);
            handleData(data);
            setIsLoading(false);
        } catch(e)  {
            setError(e);
            setIsLoading(false);
        }
    }

    return {isLoading, error, sendRequest};
}

export default useSendRequest;