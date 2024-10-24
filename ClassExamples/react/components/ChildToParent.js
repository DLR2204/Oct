import { Component } from "react";
import './style.css'

export class ChildToParent extends Component{

    state={}

    getData = (id,name,marks,add)=>{
        this.setState({
            id:id,
            name:name,
            marks:marks,
            add:add
        })
    }

    render(){
        return(
            <div className="parent">

                <h1>StuId:-{this.state.id}</h1>
                <h1>StudName:-{this.state.name}</h1>
                <h1>StuMarks:-{this.state.marks}</h1>
                <h1>stuAdd:-{this.state.add}</h1>

                <Child1   onChange={this.getData}/>

            </div>
        );
    }
}

class Child1 extends Component{

    state={stuId:10,stuName:'Suresh',stuMarks:234,stuAdd:'Hyderabad'}

    sendData=()=>{
        this.props.onChange(this.state.stuId,this.state.stuName,this.state.stuMarks,this.state.stuAdd)
    }

    render(){
        return(
            <div className="child">

            <button type="button" onClick={this.sendData}>SendData</button>
            </div>
        );
    }
}