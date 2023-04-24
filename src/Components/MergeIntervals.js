import React, { useState } from "react";

//using quick sort algorithm to sort intervals in ascending order
const quicksort = (intervals) => {
  if (intervals.length <= 1) {
    return intervals;
  }

  const pivotIndex = Math.floor(intervals.length / 2);
  const pivotValue = intervals[pivotIndex][0];
  const lesser = [];
  const equal = [];
  const greater = [];

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < pivotValue) {
      lesser.push(intervals[i]);
    } 
    else if (intervals[i][0] === pivotValue) {
      equal.push(intervals[i]);
    } 
    else {
      greater.push(intervals[i]);
    }
  }

  return quicksort(lesser).concat(equal, quicksort(greater));
};

const MergeIntervals = () => {
  const [inputValue, setInputValue] = useState("");
  const [intervals, setIntervals] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const array = inputValue.split(",");
    const numbers = [];
    for (let i = 0; i < array.length; i += 2) {
      if (array[i + 1]) {
        numbers.push([array[i], array[i + 1]]);
      }
    }

    const sortedIntervals = quicksort(numbers);
    setIntervals(sortedIntervals);
  };

  let merged = [], len = 0;

  //looping through sortedIntervals to check if current interval overlaps with previous merged interval in merged[]
  for (let currInterval of intervals) {
    //If they overlap, update end point of previous interval in merged[] to the maximum of its end point and end point of current interval
    if (merged.length > 0 && merged[len - 1][1] >= currInterval[0]) {
      merged[len - 1][1] =
        merged[len - 1][1] > currInterval[1]
          ? merged[len - 1][1]
          : currInterval[1];
    } 
    else {
      merged.push(currInterval);
      len++;
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="intervalInput">Enter an array of intervals (comma separated):</label>
      <input id="intervalInput" value={inputValue} onChange={handleInputChange}/>
      <button type="submit">Submit</button>
      <p>{JSON.stringify(merged)}</p>
    </form>
  );
};

export default MergeIntervals;
