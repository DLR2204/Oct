import { Component } from "react";


class Calculator extends Component{

    state = {a:10,b:5}

    render(){
        return(<div>

           
            <input type="text" className="inputA"  onChange={e=>{this.setState({a:parseInt(e.target.value)})}}/>
            <input type="text" className="inputB" onChange={e=>{this.setState({b:parseInt(e.target.value)})}}/>

          <br/><br/>

            <h1>Addition:- {this.state.a+this.state.b}</h1>

            <h1>Subraction:-{this.state.a-this.state.b} </h1>

            <h1>Multiplication:- {this.state.a*this.state.b}</h1>

            <h1>Division:- {this.state.a/this.state.b}</h1>

                <br/><br/>
          

        </div>);
    };
}

export default Calculator;