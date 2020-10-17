import React from 'react';

export default class FormInput extends React.Component{
    
    inputMsg=(e)=>{
        e.preventDefault();
        const userText =e.target.elements.userText.value.trim();
        e.target.elements.userText.value='';
        //userText = "" ? alert('enter the text'):this.props.sendText(userText)
        if(userText== ""){
            alert('enter the text');
        }
        else{
            this.props.sendText(userText);
        }
        
    }
    
    render(){
        return (   
            <form onSubmit={this.inputMsg} className="form-inline border-top py-2">
                <input placeholder="Write a reply..." name='userText' className="text-dark flex-grow-1 border-0 chat-input w-auto form-control" type="text"/>
                <button className="border-0 btn d-flex px-3 chat-input"><i className="material-icons send color">send</i></button>
            </form>
        )
    }
}