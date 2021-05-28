import React from "react";

function Row(props) {
  const id = props.id

  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`} id={id}>
      {props.children}
    </div>
  )
}

export default Row;