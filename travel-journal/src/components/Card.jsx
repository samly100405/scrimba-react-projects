import React from "react";
import locationPinIcon from "../assets/images/location-pin-icon.png"

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.data.imageUrl} alt="" className="card-image"/>
      <div className="card-text">
        <div className="card-subtitle">
          <img src={locationPinIcon} alt="" className="card-image" id="pin-image" width="7px"/>
          <h4 className="card-location-text">
            {props.data.location.toUpperCase()}
          </h4>
          <a href={props.data.googleMapsUrl} className="card-location-link">
            View on Google Maps
          </a>
        </div>
        <div className="card-main-text">
          <h1 className="card-location-title">{props.data.title}</h1>
          <h2 className="card-date">{props.data.startDate} - {props.data.endDate}</h2>
          <p className="card-desc">{props.data.description}</p>

        </div>
      </div>
    </div>
  )
}

export default Card;