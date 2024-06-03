import React from "react";
import Arrow from "../../assets/Arrow.png"
const Work_top=()=>{
    return(
        <div className="flex flex-row mt-[100px]">
            <div className="w-[700px]">
                <h1 className=" text-custonRed text-[23px] font-semibold ">Work Lefly Digital Agency</h1>
                <p className="text-[34px] font-bold mt-[8px]">Unlock the power of Digital Marketing Drive Growth and Tailored Strategies</p>
                <p className=" font-light text-[13.5px] mt-[15px]">Explore our comprehensive suite of digital marketing services designed to help you business thrive in the online landscape.Explore our comprehensive suite of digital marketing services designed to help you business thrive in the online landscape.</p>
            </div>
            <div className="">
                    <img src={Arrow} alt="arrow" className="w-[105px] pt-[130px] ml-[105px]" />
            </div>
            <div className="w-[200px] ml-[100px]">
                    <p className="text-[13.5px] pt-[65px]">comprehensive suite of digital marketing</p>
                    <button className=" bg-customDarkPurple text-white px-[18px] py-[10px] rounded-sm mt-[50px]">Learn More</button>
            </div>   
        </div>

    );
}

export default Work_top;