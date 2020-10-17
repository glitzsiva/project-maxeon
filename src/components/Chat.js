import React from 'react';
import FormInput from './FormInput';
import TextMsg from './TextMsg'


export default class Chat extends React.Component {

    state={
        userInput:[],
        data:[]
    }
    async getMsg() {       
        const response = await fetch('https://api.adviceslip.com/advice')
        const responseData = await response.json();
        console.log()
        const botMsg=responseData.slip;
        this.setState({
            data:this.state.data.concat(botMsg)
        })
    }
    
    sendText=(userText)=>{
       const userMsg={id:this.state.length, req:userText}
        this.setState({
            userInput:this.state.userInput.concat(userMsg)
        })
        this.getMsg();
    }
    
    render() {
        return (
            <section>
                <div className="chat-box px-2">
                {
                    this.state.userInput.length > 0 && 
                    
                    this.state.userInput.map((value,index)=> 
                        <div>
                            <TextMsg profile='' chat="ml-auto" index={index} input={value.req}/>
                            {
                                this.state.data.length == this.state.userInput.length  &&  <TextMsg index={index} profile="bot-img rounded-circle mr-2 align-self-center" input={this.state.data[index].advice} chat="m-0 bot-msg"/>
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