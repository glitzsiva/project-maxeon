import React from 'react';
import FormInput from './FormInput';
import TextMsg from './TextMsg'


export default class Chat extends React.Component {

    sendText=(userText)=>{
       this.props.sendText(userText)
    }
    
    render() {
        return (
            <section>
                <div className="chat-box px-2">
                {
                    this.props.userInput.length > 0 && 
                    
                    this.props.userInput.map((value,index)=> 
                        <div>
                            <TextMsg profile='' chat="ml-auto" index={index} input={value.req}/>
                            {
                                this.props.data[index] && <TextMsg index={index} profile="bot-img rounded-circle mr-2 align-self-center" input={this.props.data[index].advice} chat=" bot-msg"/>
                            }
                           
                        </div>
                    )
                }                   
                </div>
                <div className="  text-center mb-2">
                   <small className="small-text "><img src="./assets/favicon.png"  className="img-fluid mr-2"/>we run on SurveySparrow</small>
                </div>
                <FormInput sendText={this.sendText}   />
            </section>
        )
    }
}