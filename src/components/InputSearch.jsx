import React from "react";

const InputSearch = (props) => {
    return (
    <div className="mb-3">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input type="text" className="form-control rounded-0" placeholder="Search" id={props.id} name={props.title} onChange={e => props.aoEscrever(e)}/>
    </div>
    )
}

export default InputSearch;  