import React from 'react';
import Header from './Header';
import Banner from './Banner';
import ChatIcon from './ChatIcon'
import MessageBox from './MessageBox';
import AOS from 'aos';

export default class Root extends React.Component{
    
    state={
        chatPop:false,
        start:false,
        userInput:[],
        data:[]
    }
    componentDidMount(){
        AOS.init({
            duration:400
        })
    }
    PopUp=()=>{ 
        
        this.setState({
            chatPop:!this.state.chatPop
        })
    }
    startChat=()=>{
        this.setState({
            start:true
        })
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


    render(){
        return (
            <div>
                <Header />
                <Banner />
                {
                    this.state.chatPop && <MessageBox data ={this.state.data} userInput={this.state.userInput} sendText={this.sendText} start={this.state.start}  startChat={this.startChat} />
                }
                <ChatIcon PopUp={this.PopUp} chatPop={this.state.chatPop} />
            </div>
        )
    }

}