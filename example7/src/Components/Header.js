import React,{Component} from 'react';
import './Header.css'
import logo from '../logo.svg'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Example #7
                </p>
            </div>
        );
    }
}

export default Header;