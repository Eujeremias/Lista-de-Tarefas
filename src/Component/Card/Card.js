import React from "react";

const Card = (props) =>{
    return(
        <div>
            <h2>{props.title}</h2>
            <h2>{props.content}</h2>
        </div>
    )
}
export default Card