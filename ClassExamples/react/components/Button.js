import { useState } from "react";


function  Button(){

    var name = useState('Aditya');

    return(<div>

<button type="button" >{name}</button>

    </div>);
}

export default Button;