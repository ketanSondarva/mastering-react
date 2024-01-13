import React, { useEffect, useState } from 'react'

const useTime = (intervalMiliSecond=1000) => {
    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        }, intervalMiliSecond)
    },[intervalMiliSecond])
  return currentTime;
}

export default useTime