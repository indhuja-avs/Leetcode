import React from "react";

const ChooseFunction = (props) => {
    const selectedFunctionHandler = (event) => {
        props.onSelectFunction(event.target.value);
    }
    return (
      <div>
        <label>Select a function</label>
        <br></br>
        <select value={props.selected} onChange={selectedFunctionHandler}>
          <option value=''></option>
          <option value="MaxStoredWater">MaxStoredWater</option>
          <option value="MergeIntervals">MergeIntervals</option>
          <option value="CountDigitOne">CountDigitOne</option>
        </select>
        <br/><br/>
      </div>
    );
};

export default ChooseFunction;