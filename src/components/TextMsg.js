import React from 'react';

const TextMsg=(props)=>(
    <div className="media">
        <span className={props.profile}></span>
        <div className="media-body">
            <p key={props.index} className={`user py-2  px-3 rounded ${props.chat}`}>{props.input}</p>          
        </div>
    </div>
)
export default TextMsg;