import React from 'react';

import '../Style.css';

function FunctionalComponents(){
    return(
        <div className="Functional-div">
            <h2>This is created using Functional Based Components</h2>
            <p> This is done using external css </p>
            <p style={{color:"blue"}}>This is done using inline css</p>
        </div>
    )
}

export default FunctionalComponents;