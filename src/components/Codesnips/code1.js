import React, { Component } from 'react';
import Coding1 from "./code1.JPG";
import Coding2 from "./code2.JPG";
import "./code.css";

class Code1 extends Component {
    render() {
        return(
<div class="code1">
<img class="code" id="c1p" alt="code1" src={Coding1} />;
</div>
        )
    }
}

export default Code1