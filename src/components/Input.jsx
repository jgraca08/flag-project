import React from "react";

const Input = (props) => {

    return(
        <form className="d-flex" role="search">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input className="form-control me-2 border border-danger rounded-0" id={props.id} name={props.name} type="text" placeholder="Search" aria-label="Search" onChange={e => props.aoEscrever(e)}></input>
            <button className="btn btn-outline-danger rounded-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
    )

}

export default Input;