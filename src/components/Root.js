import React from 'react';
import Header from './Header';
import Banner from './Banner';
import ChatIcon from './ChatIcon'
import MessageBox from './MessageBox';
import AOS from 'aos';

export default class Root extends React.Component{
    
    state={
        chatPop:false,
        start:false
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


    render(){
        return (
            <div>
                <Header />
                <Banner />
                {
                    this.state.chatPop && <MessageBox start={this.state.start}  startChat={this.startChat} />
                }
                <ChatIcon PopUp={this.PopUp} chatPop={this.state.chatPop} />
            </div>
        )
    }

}