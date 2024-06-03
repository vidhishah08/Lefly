import React from "react";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/twitter.png"

const Footer_middle=()=>{
    return(
        <div className="mt-[50px] flex flex-row">
            <div className="w-[400px]">
                <h1 className=" text-customDarkPurple font-bold text-[24px]">Lefly</h1>
                <p className="text-[13.5px] font-light mt-[4px]">Whether you have questions about our service,want to discuss a project,or simly need expert advice,our team is here to help.Fill out the form</p>
            </div>
            <div className=" grid grid-rows-4 grid-cols-3 ml-[100px] text-[13.5px] gap-x-[20px]">
                <p>About</p>
                <p>Grow Your Business</p>
                <p>Contact Us</p>
                <p>Solutions</p>
                <p>Drive More Sales</p>
                <p>Testimonial</p>
                <p>Resources</p>
                <p>Idea Analysis</p>
                <p>Joint Now</p>
                <p>Pricing</p>
                <p>Income Sales</p>
                <p>Training</p>
            </div>
            <div className="ml-[10px] text-[13.5px]">
                <p>info@yourdigitalagency.com</p>
                <div className="flex flex-row mt-[8px]">
                    <img src={Instagram} alt="instagram" className="mr-[9px]"/>
                    <img src={Facebook} alt="facebook" className="mr-[9px]"/>
                    <img src={Twitter} alt="twitter"/>
                </div>
            </div>
        </div>
    );
}

export default Footer_middle;