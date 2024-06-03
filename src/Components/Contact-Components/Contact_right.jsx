import React from "react";
import arrow2 from "../../assets/Arrow2.png"

const Contact_right=()=>{
    return(
        <div className="ml-[80px]">
            <form>
                <div className="flex flex-row">
                    <input type="text" placeholder="Your Name" className="mr-[18px] pl-[18px] py-[10px] border-[3px] rounded-lg border-customDarkPurple basis-1/2"></input>
                    <input type="text" placeholder="Your Email" className=" pl-[18px] py-[10px] border-[3px] rounded-lg border-customDarkPurple basis-1/2"></input>
                </div>
                <input className="text pl-[18px] py-[10px] border-[3px] rounded-lg border-customDarkPurple mt-[20px] w-full" placeholder="Your Address"></input>
                <textarea className="pl-[18px] py-[10px] border-[3px] rounded-lg border-customDarkPurple mt-[20px] w-full h-[160px]" placeholder="Enter Message"></textarea> 
                <button className="bg-customDarkPurple px-[15px] py-[12px] text-white mt-[20px] w-[100px] rounded-md flex flex-row"><h1>Send</h1><img src={arrow2} alt="arrow2" className="w-[20px] pt-[9px] ml-[5px]"/></button>   
            </form>
        </div>
    );
}

export default Contact_right;