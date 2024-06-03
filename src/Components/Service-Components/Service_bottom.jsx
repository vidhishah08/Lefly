import React from "react";
import linked_service from "../../assets/linked_services.png"
import arrow1 from "../../assets/Arrow1.png"
import share from "../../assets/share.png"
import shoping_mode from "../../assets/shoppingmode.png"
import add_to_home_screen from "../../assets/add_to_home_screen.png"

const Service_bottom=()=>{
    return(
        <div className="grid grid-rows-2 grid-cols-2 gap-x-[60px] gap-y-[40px] mt-[50px]">
            <div className="bg-white border-t-customDarkPurple border-t-[10px] drop-shadow-lg">
                <div className="px-[60px] py-[30px]">
                    <div className="flex flex-row">
                        <div className=" bg-customPurple w-[50px] h-[50px] drop-shadow-lg "><img src={linked_service} alt="linked_services" className="px-[2px] py-[2px]"/></div>
                        <div className="ml-[18px]"><p className="text-[13.5px] font-light">Flied Agency</p><p className="font-bold">Digital Strategy</p>
                        </div>
                    </div>
                    <div className="mt-[25px] text-[13.5px] font-light"><p>Learn how are talented designes combine creativity and functionality to deli captivating user experiences for your audience.Learn how our tail designers comine creativity and functionality to deliver captivating </p></div>
                    <button className="text-custonRed text-[20px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[30px] py-[8px]"/></button>
                </div>   
            </div>
            <div className="bg-white border-t-customDarkPurple border-t-[10px] drop-shadow-lg">
                <div className="px-[60px] py-[30px]">
                    <div className="flex flex-row">
                        <div className=" bg-customPurple w-[50px] h-[50px] drop-shadow-lg "><img src={add_to_home_screen} alt="add_to_home_screen" className="px-[2px] py-[2px]"/></div>
                        <div className="ml-[18px]"><p className="text-[13.5px] font-light">Flied Agency</p><p className="font-bold">Mobile App Developement</p>
                        </div>
                    </div>
                    <div className="mt-[25px] text-[13.5px] font-light"><p>Learn how are talented designes combine creativity and functionality to deli captivating user experiences for your audience.Learn how our tail designers comine creativity and functionality to deliver captivating </p></div>
                    <button className="text-custonRed text-[20px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[30px] py-[8px]"/></button>
                </div>   
            </div>
            <div className="bg-white border-t-customDarkPurple border-t-[10px] drop-shadow-lg">
                <div className="px-[60px] py-[30px]">
                    <div className="flex flex-row">
                        <div className=" bg-customPurple w-[50px] h-[50px] drop-shadow-lg "><img src={share} alt="share" className="px-[2px] py-[2px]"/></div>
                        <div className="ml-[18px]"><p className="text-[13.5px] font-light">Flied Agency</p><p className="font-bold">Content Creation</p>
                        </div>
                    </div>
                    <div className="mt-[25px] text-[13.5px] font-light"><p>Learn how are talented designes combine creativity and functionality to deli captivating user experiences for your audience.Learn how our tail designers comine creativity and functionality to deliver captivating </p></div>
                    <button className="text-custonRed text-[20px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[30px] py-[8px]"/></button>
                </div>   
            </div>
            <div className="bg-white border-t-customDarkPurple border-t-[10px] drop-shadow-lg">
                <div className="px-[60px] py-[30px]">
                    <div className="flex flex-row">
                        <div className=" bg-customPurple w-[50px] h-[50px] drop-shadow-lg "><img src={shoping_mode} alt="shoping_mode" className="px-[2px] py-[2px]"/></div>
                        <div className="ml-[18px]"><p className="text-[13.5px] font-light">Flied Agency</p><p className="font-bold">E-Commerce Solution</p>
                        </div>
                    </div>
                    <div className="mt-[25px] text-[13.5px] font-light"><p>Learn how are talented designes combine creativity and functionality to deli captivating user experiences for your audience.Learn how our tail designers comine creativity and functionality to deliver captivating </p></div>
                    <button className="text-custonRed text-[20px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[30px] py-[8px]"/></button>
                </div>   
            </div>
        </div>
    );
}
export default Service_bottom;