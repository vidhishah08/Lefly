import React from "react";
import phone from "../../assets/phone_in_talk.png"
import hourglass from "../../assets/hourglass_empty.png"
import email from "../../assets/stacked_email.png"
import distance from "../../assets/distance.png"

const Contact_left=()=>{
    return(
        <div>
            <div>
                <h1 className="text-custonRed text-[23px] font-bold">Contact Us</h1>
                <p className="text-[34px] font-bold mt-[8px]">Get In Touch</p>
                <p className="text-[13.5px] w-[700px] font-light mt-[25px]">Whether you have questions about our service,want to discuss a project,or simly need expert advice,our team is here to help.Fill out the form below,and we'll get back to you</p>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 mt-[60px] gap-x-[8px] gap-y-[40px]">
                <div className="flex flex-row">
                    <div><img src={phone} alt="phone"/></div>
                    <div className="ml-[15px]"><h1 className="text-[15px] font-bold ">Phone Number</h1><p className="font-medium text-[12px] text-gray-500">+123-456-789</p></div>
                </div>
                <div className="flex flex-row">
                    <div><img src={hourglass} alt="hourglass"/></div>
                    <div className="ml-[15px]"><h1 className="text-[15px] font-bold ">Buisness Hours</h1><p className=" font-medium text-[12px] text-gray-500">Monday-Friday,9:00 AM-6:00 PM(GST)</p></div>
                </div>
                <div className="flex flex-row">
                    <div><img src={email} alt="phone"/></div>
                    <div className="ml-[15px]"><h1 className="text-[15px] font-bold ">Email</h1><p className="font-medium text-[12px] text-gray-500">info@yourdigitalagency.com</p></div>
                </div>
                <div className="flex flex-row">
                    <div><img src={distance} alt="phone"/></div>
                    <div className="ml-[15px]"><h1 className="text-[15px] font-bold ">Address</h1><p className="font-medium text-[12px] text-gray-500">123 Digital Avenue City,Country,ZIP</p></div>
                </div>
            </div>
        </div>
    );
}
export default Contact_left;