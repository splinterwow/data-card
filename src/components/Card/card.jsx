import React from "react";
import "./card.css";

function Card(props) {
  const { data } = props;
  return (
    <div className="card">
      <img className="card-image" src={data.image} alt="User" />
      <h2 className="card-name">Name: {data.firstName}</h2>
      <h3 className="card-lastname">LastName: {data.lastName}</h3>
      <span className="card-phone">Phone Number: {data.phone}</span>
      <p className="card-email">{data.email}</p>
      <p className="card-cars">Cars: {data.cars}</p>
    </div>
  );
}

export default Card;
