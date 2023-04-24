import React, { useState } from "react";

const CountDigitOne = () => {
    const [number, setNumber] = useState(0);

    const handleInputChange = event => {
        setNumber(event.target.value);
    }
    let count = 0;
    let digit = 1; // Initialize the digit to 1, holds the current position value (1s, 10s, 100s)
    let remainder = number; // Initialize the remainder to n
    
    while (remainder > 0) {
      // Loop until the remainder becomes 0
      const quotient = Math.floor(remainder / 10); // Holds the digits that needs to be processed
      const curr = remainder % 10; // Find the current digit by taking the remainder of the number divided by 10
      if (curr === 0) {
        // The count of ones will be the quotient times the digit
        count += quotient * digit; 
      } else if (curr === 1) {
        // The count of ones will be the quotient times the digit plus the number of ones in the remaining digits plus 1
        count += quotient * digit + (number % digit) + 1; 
      } else {
        // The count of ones will be the (quotient plus 1) times the digit
        count += (quotient + 1) * digit; 
      }
    
      //Moving on to remaining digits(quotient) to be processed
      remainder = quotient;
      digit *= 10;
    }
    return (<div>
        <label htmlFor="num">Enter a number:</label>
        <input id="num" onChange={handleInputChange} />
        <p>{count}</p>
        </div>);
    };

    export default CountDigitOne;