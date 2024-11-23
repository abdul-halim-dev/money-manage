import React, { useState, useEffect } from 'react';

const CountdownTimer = ({duration}) => {
 
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(timeRemaining - 1000)
      
    }, 1000);
   
     
  }, [timeRemaining]); 
 
const getFormattedTime = (milisecond)=>{
let totalSecond =parseInt(Math.floor(milisecond / 1000))
let totalMinutes = parseInt(Math.floor(totalSecond /60))
let totalHours = parseInt(Math.floor(totalMinutes / 60))
let days = parseInt(Math.floor(totalHours / 24))

let seconds = parseInt(totalSecond %60)
let minutes = parseInt(totalMinutes %60)
let hours = parseInt(totalHours % 24)
return `${days} : ${hours} : ${minutes} : ${seconds}`

}
  return (
      <p> {getFormattedTime(timeRemaining)} </p>
  );
};

export default CountdownTimer;