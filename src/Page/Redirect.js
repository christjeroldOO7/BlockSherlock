import React from "react"
import { ReactDOM } from "react";
function square(number){
    return number * number;
}

function Sample(){
    let x = 2
    let y = square(x);

    const redirect = ReactDOM.createPortal(document.getElementById('redirect'));

    redirect.return(
        <h1>Square of {x} is: {y}</h1>
    );
}

export default Sample;