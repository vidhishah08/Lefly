import React from "react";
import Footer_top from "./Footer-Components/Footer_top";
import Footer_middle from "./Footer-Components/Footer_middle";
import Footer_end from "./Footer-Components/Footer_end";

const Footer=()=>{
    return(
        <div>
            <div className="mt-[150px] px-[170px]">
                <Footer_top></Footer_top>
            </div>
            <div className=" border-b-customDarkPurple border-b-[3px] pb-[20px]"></div>
            <div className="px-[170px] mb-[20px]">
                <Footer_middle></Footer_middle>
            </div>
            <div className=" border-b-customDarkPurple border-b-[3px] pb-[20px]"></div>
            <Footer_end></Footer_end>
        </div>
        
    );
}

export default Footer;