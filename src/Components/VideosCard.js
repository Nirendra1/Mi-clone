import React from "react";
import "../Styles/VideoCard.css";

const PlayButton=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>

const VideosCard =({index,image,name})=>{
    return(
        <>
        <div className="videoCard" alt={`${index}`} style={{backgroundImage:`URL(${image})`}}>
        <a href="#/">{PlayButton}</a>
                <p>{name}</p>
                </div>
        </>
    )
}
export default VideosCard;