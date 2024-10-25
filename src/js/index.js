//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import App from "./component/App.jsx";

import SecondsCounter from "./views/SecondsCounter.jsx";
let counter=0;

setInterval(()=>{
    let numOne = Math.floor(counter / 1) % 10;
    const numTwo = Math.floor(counter / 10)% 10;
    const numThree = Math.floor(counter / 100)% 10;
    const numFour = Math.floor(counter / 1000)% 10;
    const numFive = Math.floor(counter / 10000)% 10;
    const numSix = Math.floor(counter / 100000)% 10;
    

    counter++;

  
    

    //render your react application
    ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter 
        numOne = {numOne}
        numTwo = {numTwo}
        numThree = {numThree}
        numFour = {numFour}
        numFive = {numFive}
        numSix = {numSix}
    />);

    

    
},400)



