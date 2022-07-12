import React,{useState} from "react";
import './Required.css'

const Required = (props) => {
    const [error,setError] = useState('');

    function aoMudar(el) {
        const status = props.pattern.test(el.value);
        props.onRequired(el.name,status);
        if (!status)
            setError(props.error);
        else
            setError('');
    }

    return (
    <div className="mb-3 Required">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <input type={props.type || 'text'} className="form-control rounded-0" id={props.id} name={props.name} onChange={e => aoMudar(e.target)}/>
        <div className="form-text">{error}</div>
    </div>
    )
}

export default Required;  