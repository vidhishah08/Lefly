import React from "react";
import Service_top from "./Service-Components/Service_top";
import Service_bottom from "./Service-Components/Service_bottom";

const Service=()=>{
    return(
        <div className="mt-[200px]">
            <Service_top></Service_top>
            <Service_bottom></Service_bottom>
        </div>
    );       
}

export default Service;