import React, { useState } from 'react';
import ChooseFunction from './Components/ChooseFunction';
import MaxStoredWater from './Components/MaxStoredWater';
import MergeIntervals from './Components/MergeIntervals';
import CountDigitOne from './Components/CountDigitOne';

function App() {
    const [whichFunction, setWhichFunction] = useState('');
    const onSelectFunctionHandler = (selectedFunction) => {
        setWhichFunction(selectedFunction);
    }

    let renderedFunction;
    if (whichFunction === 'MaxStoredWater') {
      renderedFunction = <MaxStoredWater />;
    }
    else if (whichFunction === 'MergeIntervals') {
      renderedFunction = <MergeIntervals />;
    }
    else if (whichFunction === 'CountDigitOne') {
      renderedFunction = <CountDigitOne />;
    }
    return (
    <React.Fragment>
    <ChooseFunction selected={whichFunction} onSelectFunction={onSelectFunctionHandler}/>
    {renderedFunction}
    </React.Fragment>
    );
};

export default App;