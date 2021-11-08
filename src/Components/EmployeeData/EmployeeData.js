import "../Form.css";
import React from 'react';

function EmployeeData() {
    return (

        <div className="form-container">
        <h1> EMPLOYEE FORM DATA </h1>
        <ul>
        {
            this.props.list.map((item) => {
                return ( 
                    <li key = { item.id }>
                    Name: { item.value } | Department: { item.department } | Ratings: { item.ratings } </li>
                )
            })
        } 
        </ul>
        <button onClick = { this.props.isBackButtonVisible }> Go Back </button> 
        </div >
    )
}

export default EmployeeData;