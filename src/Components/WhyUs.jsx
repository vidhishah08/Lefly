import React from "react";
import WhyUs_left from "./WhyUs-components/WhyUs_left";
import WhyUs_Right from "./WhyUs-components/WhyUs_Right";

const WhyUs=()=>{
    return(
        <div className="mt-[200px] flex flex-row">
            <div className="basis-1/2"><WhyUs_left /></div>
            <div className="basis-1/2"><WhyUs_Right /></div>
        </div>
    );
}

export default WhyUs;