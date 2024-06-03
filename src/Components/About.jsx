import React from "react";
import About_right from "./About-Components/About_right";
import About_left from "./About-Components/About_left";

const About=()=>{
    return(
        <div className="flex flex-row mt-[200px] ">
            <div className="basis-1/2"><About_right /></div>
            <div className="basis-1/2"><About_left  /></div>
        </div>
    ); 
}

export default About;