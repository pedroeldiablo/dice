import React, { Component } from 'react'
import './Dice.css';

class Dice extends Component {
    render() {
        return (
            <div className="Dice">
               {this.props.face}
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>

            </div>
        )
    };
};

export default Dice;
