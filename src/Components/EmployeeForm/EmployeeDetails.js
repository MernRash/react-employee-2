import './Form.css';
import React,{Component} from 'react';

class EmployeeForm extends Component{
    constructor(props){
        super(props);

        this.state={
            newListItem : "",
            department : "",
            ratings : "",
            list : [],
            isFormVisible: true,
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
            isFormVisible: false,
            isBackButtonVisible: true
            
           
    });

 

}

backButton() {
    const changeHead = document.querySelector("#head1");
    changeHead.innerHTML = "EMPLOYEE FEEDBACK FORM";
    this.setState({
      isFormVisible: true,
      isBackButtonVisible: false
    
    });
  }

addDetails(){
    // e.preventDefault();
    this.addData();
}


    render(){
        return(
           <div className="App">
               <h1 id="head1">EMPLOYEE FEEDBACK FORM</h1>

            <div className="form-container" style={{ display: this.state.isFormVisible ? "flex" : "none" }}>
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
                <button disabled={this.state.newListItem === "" || this.state.department === "" || this.state.ratings === 0} onClick={()=>this.addDetails()}>Submit</button>

            </div>

            <ul  style={{visibility: this.state.isFormVisible ? "hidden" : "visible"}}>
              
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
            <button style={{ display: this.state.isBackButtonVisible ? "block" : "none"}} onClick={() => this.backButton()} >
          Go Back {" "}
        </button>
           </div>
        );
    }
}


export default EmployeeForm;