import React, { Component } from 'react';
import "./projects.css";
import Empdir from "./Projects/Empdir";
import Budtra from "./Projects/Budtra";
import Fittra from "./Projects/Fittra";
import Burgerhub from "./Projects/Burgerhub";

class Projects extends Component {
    render() {
        return(
            <div class="cardsall">
<div class="inbetween">
<Empdir></Empdir>
</div>
<div class="inbetween">
<Budtra></Budtra>
</div>
<div class="inbetween">
<Fittra></Fittra>
</div>
<div class="inbetween">
<Burgerhub></Burgerhub>
</div>
<div class="inbetween">
<Empdir></Empdir>
</div>
<div class="inbetween">
<Budtra></Budtra>
</div>
<div class="inbetween">
<Fittra></Fittra>
</div>
<div class="inbetween">
<Burgerhub></Burgerhub>
</div>
</div>
        )
    }
}
export default Projects