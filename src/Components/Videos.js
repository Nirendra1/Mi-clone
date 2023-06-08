import React from "react";
import"../Styles/Videos.css";
import VideosCard from "./VideosCard";
const Videos =({Videos})=>{

    console.log(Videos)
    return(
        <>
        <div className="videos">
{
    Videos && Videos.map((item,index)=>(

        <VideosCard index={index} key={item.image} image={item.image} name={item.name}/>

    ))
}
        </div>
        </>
    )
}
export default Videos;