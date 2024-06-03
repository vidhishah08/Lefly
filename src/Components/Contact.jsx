import React from "react";
import Contact_left from "./Contact-Components/Contact_left";
import Contact_right from "./Contact-Components/Contact_right";

const Contact=()=>{
    return(
        <div className="mt-[150px] flex flex-row">
            <div className="basis-1/2"><Contact_left /></div>
            <div className="basis-1/2"><Contact_right></Contact_right></div>
        </div>
    );
}
export default Contact