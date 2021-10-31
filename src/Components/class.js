import React from 'react';
import {Component} from 'react';
import '../Style.css';

class ClassComponent extends Component{

    render(){
        return(
            <div className="Class-div">
                <h2>This is created using Class Based Components</h2>
                <p> This is done using external css </p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}

export default ClassComponent;