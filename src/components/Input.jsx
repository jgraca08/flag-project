import React from "react";

const Input = (props) => {
    return (
    <div className="mb-3">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input type="text" className="form-control" id={props.id} name={props.name} onChange={e => props.aoEscrever(e)}/>
    </div>
    )
}

export default Input; 