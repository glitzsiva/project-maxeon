import React from 'react';
import ChatInfo from './ChatInfo';
import Chat from './Chat'

export default class MessageBox extends React.Component{
    



    render(){
        const title='Hello Ask Us Anything. Share Your Feedback'
        const replyTitle= 'The team typically replies in a few minutes'
        return(
            <div  className={`chat-box-fixed ${this.props.class}`} data-aos="eg-left" >
                <div className="cht " >
                    <div className=" bg-white pt-2 rounded">
                        <div className="notify mx-2 py-3 py-lg-3 mb-3 px-4 rounded">
                            <h6>Hi There!</h6>
                            {
                                this.props.start ?  <p className="m-0 chat-p">{replyTitle}</p>:<p className="m-0 chat-p">{title}</p>
                            }
                        </div>
                        {
                            this.props.start ? <Chat data={this.props.data} userInput={this.props.userInput} sendText={this.props.sendText} /> : <ChatInfo replyTitle={replyTitle} startChat={this.props.startChat}/>
                        }
                    </div>
                </div>           
            </div>
            
        )
    }
}



