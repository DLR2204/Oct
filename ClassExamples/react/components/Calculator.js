import { Component } from "react";


class Calculator extends Component{

    state = {a:10,b:5,showResult:false}

    setA= e=>{this.setState(
        {a:parseInt(e.target.value)
            ,showResult:false}
        )}

    setB=e=>{this.setState(
        {b:parseInt(e.target.value)
            ,showResult:false}
        )}

    setShowResult=e=>{this.setState(
        prevState=>{
            return {showResult:!prevState.showResult}
        }
    )}

    render(){
        return(<div>

           
            <input type="text" className="inputA"  onChange={this.setA}/>
            <input type="text" className="inputB" onChange={this.setB}/>


            <button type="button" onClick={this.setShowResult}>ShowResult</button>


          <br/><br/>

         {this.state.showResult ?(<div>

            <h1>Addition:- {this.state.a+this.state.b}</h1>

            <h1>Subraction:-{this.state.a-this.state.b} </h1>

            <h1>Multiplication:- {this.state.a*this.state.b}</h1>

            <h1>Division:- {this.state.a/this.state.b}</h1>

                <br/><br/></div>):(
                    <div>

                       <h3> Please check the result with the showResult Button</h3>

                    </div>

                )}



          

        </div>);
    };
}

export default Calculator;