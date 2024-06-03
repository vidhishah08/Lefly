import React from "react";
import queue_play_next from "../../assets/queue_play_next.png"
import arrow1 from "../../assets/Arrow1.png"

const WhyUs_left=()=>{
    return(
        <div>
            <div>
                <h1 className="text-custonRed text-[23px] font-semibold">Why Us Lefly Digital Agency</h1>
                <p className="text-[34px] font-bold mt-[8px]">Maximize Your Online Dominate Search Engines and Amplify Your Visibility</p>
                <p className="font-light text-[13.5px] mt-[25px]">Certainly!A digital agency operates in the realm of digital marketing,encompassing various services such as web design,developement,developement,search engine optimizatin (SEO),content creation</p>
            </div>
            <div className="flex flex-row mt-[50px]">
                <div className=" bg-customP w-[50px] h-[50px] rounded-md px-[10px] py-[10px]"><img src={queue_play_next} alt="queue_play_next"/></div>
                <div><p className="text-[13px] pt-[18px] ml-[15px] font-bold">Transform Your Brand's Online Presence with Solutions from Digital Innovators</p></div>
            </div>
            <p className="text-[13.5px] mt-[15px] font-light w-[700px]">Certainly!A digital agency operates in the realm of digital marketing,encompassing various services such as web design,developement,developement,search engine optimizatin (SEO),content creation</p>
            <button className="text-custonRed text-[13px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[15px] py-[5px]"/></button>   
            <div className="flex flex-row mt-[50px]">
                <div className=" bg-customP w-[50px] h-[50px] rounded-md px-[10px] py-[10px]"><img src={queue_play_next} alt="queue_play_next"/></div>
                <div><p className="text-[13px] pt-[18px] ml-[15px] font-bold">Unlock the Power of Digital Marketing Drive Growth and with Tailored Startegies</p></div>
            </div>
            <p className="text-[13.5px] mt-[15px] font-light w-[700px]">Certainly!A digital agency operates in the realm of digital marketing,encompassing various services such as web design,developement,developement,search engine optimizatin (SEO),content creation</p>
            <button className="text-custonRed text-[13px] font-semibold mt-[30px] flex flex-row"><h1 className="mr-[10px]">Learn More</h1><img src={arrow1} alt="arrow1" className="w-[15px] py-[5px]"/></button>
        </div>
    );
}

export default WhyUs_left;