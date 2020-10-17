import React from 'react';


const ChatInfo=(props)=>{
    return(
        <div className="reply-notify p-3 py-md-3 px-md-4">
            <h6 className="text-dark">Start a Conversation</h6>
            <p className="text-dark mb-3 chat-p ">{props.replyTitle}</p>
            <a href="#" onClick={props.startChat} id="pop" className="sent  rounded-pill d-inline-block">New Conversation <img src="assets/send.png" alt="" /></a>
        </div>  
    )
}

export default ChatInfo;