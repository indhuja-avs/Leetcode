import React,{useState} from "react";

//To get the maximum amount of stored water, heights should be as far apart as possible.
const MaxStoredWater = () => {
    const [height, setHeight] = useState([]);

    const handleInputChange = (event) => {
        const values = event.target.value.split(',');
        setHeight(values);
    };
    //let height = [1,8,5,3,6,9,2,1,7];
    let maximumArea = 0;
    let leftPtr = 0;
    let rightPtr = height.length - 1;
  
    while (leftPtr < rightPtr) {            //iterate from left index to right index
        const leftHeight = height[leftPtr];
        const rightHeight = height[rightPtr];
        const width = rightPtr - leftPtr;
  //smaller value between left and right heights are chosen(max height can lead to slanting container, not correct)
        const smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;   
        const area = width * smallerHeight;
        maximumArea = area > maximumArea ? area : maximumArea;
     
     //moving ptr to find smaller height   
        smallerHeight === leftHeight ? leftPtr++ : rightPtr--;
    }
    //console.log(maximumArea);
  
    return (<div>
        <label htmlFor="heightInput">Enter heights(comma separated):</label>
        <input id="heightInput" onChange={handleInputChange} />
        <p>{maximumArea}</p>
        </div>);
  };

  export default MaxStoredWater;