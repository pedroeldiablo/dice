import React, { Component } from 'react'
import Dice from './Dice';


class RollDie extends Component {
    constructor(props) {
        super(props);
        this.state = { dice1: 1 , dice2: 1 };
        this.rollDice = this.rollDice.bind(this);

    }

    rollDice() {
        let roll1 = Math.floor(Math.random() * 6) + 1;
            let roll2 = Math.floor(Math.random() * 6) + 1;
            this.setState({ dice1: roll1, dice2: roll2, rolling: true });

        setTimeout(()=> {
            this.setState({rolling: false});
        }, 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <div className="Table">
                    <Dice face={this.state.dice1} />
                    <Dice face={this.state.dice2} />
                </div>
                <button onClick={this.rollDice} disabled={this.state.rolling}> {this.state.rolling ? "Rolling..." : "Roll Dice !"}</button>
            </div>

        )   
    }
}

export default RollDie;
