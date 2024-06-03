import React from "react";
import IconSection from "../../assets/IconSection.png";
import IconSection1 from "../../assets/IconSection (1).png";
import IconSection2 from "../../assets/IconSection (2).png";
import IconSection3 from "../../assets/IconSection (3).png";
import Arrow from "../../assets/Arrow.png"

const Work_bottom=()=>{
    return(
        <div>
            <div className="flex flex-row pl-[70px] pt-[50px]">
                <div className="basis-1/7 "><img src={IconSection} alt="icon1" className="w-[110px]"/></div>
                <div className="basis-1/7 pt-[40px] px-[10px] w-[120px] mx-[30px]" ><img src={Arrow} alt="arrow"/></div>
                <div className="basis-1/7"><img src={IconSection1} alt="icon2" className="w-[110px]"/></div>
                <div className="basis-1/7 pt-[40px] px-[10px] w-[120px] mx-[40px]"><img src={Arrow} alt="arrow"/></div>
                <div className="basis-1/7"><img src={IconSection2} alt="icon3" className="w-[110px]"/></div>
                <div className="basis-1/7 pt-[40px] px-[10px] w-[120px] mx-[30px]"><img src={Arrow} alt="arrow"/></div>
                <div className="basis-1/7 "><img  src={IconSection3} alt="icon4" className="w-[110px]"/></div>
            </div>
            <div className="flex flex-row ">
                <div className="text-center "><p className="pt-[8px] font-semibold">Web Design Developement</p><p className="w-[250px] text-[10px] mt-[8px]">crafting visually appealing and userfriendly website tailored to clients need</p></div>
                <div className="text-center ml-[48px]"><p className="pt-[8px] font-semibold">Search Engine Optimization</p><p className="w-[250px] text-[10px] mt-[8px]">crafting visually appealing and userfriendly website tailored to clients need</p></div>
                <div className="text-center ml-[48px]"><p className="pt-[8px] font-semibold">Content Creation Marketing</p><p className="w-[250px] text-[10px] mt-[8px]">crafting visually appealing and userfriendly website tailored to clients need</p></div>
                <div className="text-center ml-[48px]"><p className="pt-[8px] font-semibold">Analytics and Reporting</p><p className="w-[250px] text-[10px] mt-[8px]">crafting visually appealing and userfriendly website tailored to clients need</p></div>
            </div>
        </div>
    );
}

export default Work_bottom;