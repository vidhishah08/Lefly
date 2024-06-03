import React from "react";
import arrow1 from "../../assets/Arrow1.png"

const Footer_top=()=>{
    return(
        <div>
            <div className="flex flex-row pt-[40px] pb-[30px]">
                <h1 className=" text-[20px] font-semibold w-[800px] mr-[170px]">Lefly is a leading provider of digital marketing solutions helping businesses thrive</h1>
                <button className="w-[180px] bg-customDarkPurple text-white rounded-md pt-[2px] text-[15px] h-[50px] mr-[150px]">Sign up now</button>
                <button className=" text-custonRed font-semibold flex flex-row mr-[120px]"><h1 className="w-[150px] text-[18px]">Study First</h1><img src={arrow1} alt="arrow1" className="w-[40px]"/></button>
            </div>
        </div>
    );
}
export default Footer_top;