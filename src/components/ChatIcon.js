import React from 'react';


export default class ChatIcon extends React.Component{

    render(){
        return(
            <div className="static">   
                <a href="#" onClick={this.props.PopUp} className="pop-icon d-inline-block mt-3 float-right">
                    {
                        this.props.chatPop ?
                        <span data-aos="flip-right">
                            <img src="assets/close.png"  className="img-fluid" alt="" />
                        </span>                      
                            :
                        <span data-aos="flip-right">
                            <img src="assets/sparrow-bird.png" id="pop"    className="img-fluid" alt="" />
                        </span>
                        
                    }           
                </a>
            </div>
        )
    }
}