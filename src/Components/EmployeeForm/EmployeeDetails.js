import './Form.css';
import React,{Component} from 'react';
import EmployeeData from '../EmployeeData/EmployeeData';


class EmployeeForm extends Component{
    constructor(props){
        super(props);

        this.state={
            newListItem : "",
            department : "",
            ratings : "",
            list : [],
            isBackButtonVisible: false
            

        }
    }

addUserInput(key,value){
    this.setState({[key]:value});
}

addData(e){
    const changeHead = document.querySelector("#head1");
    changeHead.innerHTML = "EMPLOYEE FEEDBACK DATA";


    const newlist = {
        id : 1 + Math.random(),
        value : this.state.newListItem,
        department : this.state.department,
        ratings : this.state.ratings
    }

    const list = [...this.state.list];
    list.push(newlist);

    this.setState({
            newListItem : "",
            department : "",
            ratings : "",
            list,
            isBackButtonVisible: true
            
           
    });

 

}



showButton=()=>{
    this.setState({isBackButtonVisible:!this.state.isBackButtonVisible})
}
addDetails(){
    
    this.addData();
}


    render(){
        const btn = this.state.newListItem === "" || this.state.department === "" || this.state.ratings === 0;
        return(
           <>
           {
               this.state.isBackButtonVisible ?
               <EmployeeData list={this.state.list} isBackButtonVisible={this.showButton} /> :

           <div className="App">
               <h1 id="head1">EMPLOYEE FEEDBACK FORM</h1>

            <div className="form-container">
                <label>
                    Name:
                    <input value={this.state.newListItem} placeholder="Enter Your Name" onChange={(e)=>this.addUserInput("newListItem",e.target.value)} />{" "}
                </label>
                <br />
                <label>
                    Department:
                    <input value={this.state.department} placeholder="Enter Your Department" onChange={(e)=>this.addUserInput("department",e.target.value)} />{" "}
                </label>
                <br />
                <label>
                    Ratings:
                    <input type="number" value={this.state.ratings} placeholder="Enter Your Ratings" onChange={(e)=>this.addUserInput("ratings",e.target.value)} />{" "}
                </label>
                <br />
                <button disabled={btn} onClick={()=>this.addDetails()}>Submit</button>

            </div>

            <ul>
              
            {
                this.state.list.map((item)=>{
                    return(
                       
                        <li key={item.id}>
                             {console.log(item.newListItem   )}
                        Name: {item.value} | Department: {item.department} | Ratings: {item.ratings} 
                        </li>
                    );
                })
            }
            </ul>
           
           </div>
    }
           </>
        );
    }
}


export default EmployeeForm;
