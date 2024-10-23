import { Component } from "react";


class DataBinding extends Component{
    state = {name:'Everyone'}

    render(){
        return(
            <div>
            Please Enter your name:-

    <input type="text" onChange={e=>{this.setState({name:e.target.value})}}/>

        <h1>Hello {this.state.name}!!!</h1><br/><br/><br/><br/><br/><br/>


</div>
        );
    };
}

export default DataBinding;