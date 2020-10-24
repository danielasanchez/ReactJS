import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Body extends Component{
    render(){
        const {children}= this.props;
        return(
            <div>
                <h1>{children[2]}</h1>

            </div>
        )};
}
export default Body;

Body.propTypes={
    children:PropTypes.array
}

Body.defaultProps={
    children:[
        111,
        2020,
        "Daniela"
    ]
}










/*
function Body(props){
        return(
            <div>
                <h1>{props.children[2]}</h1>

            </div>
        );
}
*/
