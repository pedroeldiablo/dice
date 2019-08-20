import React, { Component } from 'react'
import './Dice.css';

class Dice extends Component {
    render() {
        return (
            <div className={`Dice Dice-${this.props.face}`} >
              
               <div>1</div>
               <div>6</div>
               <div>3</div>
               <div>4</div>
               <div>5</div>
               <div>2</div>

            </div>
        )
    };
};

export default Dice;
