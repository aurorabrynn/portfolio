import React from "react";

function Card(props) {
  return (
    <div className="card">
       <img className="card-img-top" src={props.image}
        alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-text">{props.title}</h3>
        <p className="card-text">{props.type}</p>
        <a href={props.github}
          className="btn btn-success" target="_blank">Github</a>
      </div>
    </div>
  );
}

export default Card;
