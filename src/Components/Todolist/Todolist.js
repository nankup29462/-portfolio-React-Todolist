import React from 'react';
import Todoitem from '../Todoitem/Todoitem';

const todolist = (props) => {
    return(
        <div>
            <ul>
                {
                  props.list.map((item) => 
                    <Todoitem 
                        key={item.id} 
                        content={item.itemContent}
                        delete={() => props.delete(item.id)}
                        edit={()=>props.edit(item.id)}
                    />
                  )  
                }
            </ul>
        </div>
    )
}

export default todolist;