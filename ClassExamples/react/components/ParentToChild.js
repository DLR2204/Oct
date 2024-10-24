import { Component } from "react";

export class ParentToChild extends Component{
    state={empId:10,empName:'Ramesh',empSal:123123,empAdd:'Hyderabad'}
    render(){
        return(<div>

            <Child empId={this.state.empId} empName={this.state.empName} empSal={this.state.empSal} empAdd={this.state.empAdd}        />

        </div>);
    }
}

class Child extends Component{
    render(){
        return(
        <div>
            <h1>EmpId:-{this.props.empId}</h1>
            <h1>EmpName:-{this.props.empName}</h1>
            <h1>EmpSal:-{this.props.empSal}</h1>
            <h1>EmpAdd:-{this.props.empAdd}</h1>

        </div>
    );}
}