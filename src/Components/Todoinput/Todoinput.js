import React from 'react';
import './Todoinput.css';

const todoinput = (props) => {
    return(
        <form onSubmit={props.submit}>
            <input value={props.value} onChange={props.change}/>
            <button className="btnSubmit" type="submit" disabled={props.value ? false : true}>{props.edit ?  'Edit' : 'Create'}</button>
        </form>
    )
}

export default todoinput;