import React from 'react';
import './Todoitem.css';

const todoitem = (props) => {
    return(
        <li>
            {props.content}
            <div>
                <button onClick={props.edit}><i className="fas fa-edit"></i></button>
                <button onClick={props.delete}><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
            
    )
}

export default todoitem;