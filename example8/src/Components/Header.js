import React,{Component} from 'react';
import './Header.css'
import logo from '../logo.svg'

class Header extends Component{
    render(){
        const {titulo, numero}=this.props;
        return(
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {titulo}{this.props.numero}
                </p>
            </div>
        );
    }
}

export default Header;