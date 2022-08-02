import React from "react";

export default function Cadre (props) {
    return (
        <div className="cadre">
            <img src={props.imageUrl} className="image" />
            <div>
                <img src="pos.png" className="image-pos" />
                <span className="cadre-location">{props.location}</span>
                <a  className="cadre-map" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            
            <div className="cadre-title">{props.title}</div>
            <div className="Date">{props.startDate} - {props.endDate}</div>
            <div className="cadre-description">{props.description} </div>
        </div>
    )
    
}