import React from 'react'
import TryItButton from "../buttons/TryItButton";

export default function Main(props) {
  return (
    <div>
      <p>MAIN</p>
      <TryItButton handleClick={props.handleClick}/>
    </div>
  )
};

