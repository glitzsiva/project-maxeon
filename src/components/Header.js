import React from 'react';
import {Collapse} from 'reactstrap';

export default class Header extends React.Component{
    state={
        collapse:false
    }
    toggleNavbar=()=>{
        this.setState({
            collapse:!this.state.collapse
        })
    }
    render(){
        return (   
            <header className="sticky-top pt-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light px-0">
                        <a className="navbar-brand" href="#">Maxeon</a>
                        <div className="order-lg-3">
                            <a href="#" className="text-dark rounded-pill px-3 px-sm-3 py-2 bg-white ml-lg-3 text-dectoration login"> Login</a>
                            <button onClick={this.toggleNavbar} className="navbar-toggler ml-3 nav-btn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="material-icons menu">menu</i>
                            </button>
                        </div> 
                        <Collapse isOpen={this.state.collapse} className="order-lg-2 order-3" navbar>                 
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> Products <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Use Case</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            </ul>                  
                        </Collapse> 
                    </nav> 
                </div>    
            </header> 
        )
    }
}
