import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {

    render() {

        const ClickedButton = (e) => {
            this.props.onClick(e.target.value);

        };

        return (
            <div className="button">
                <button value="1" onClick={ClickedButton}>1</button>
                <button value="2" onClick={ClickedButton}>2</button>
                <button value="3" onClick={ClickedButton}>3</button>
                <button value="+" onClick={ClickedButton}>+</button>
                <br/>
                <button value="4" onClick={ClickedButton}>4</button>
                <button value="5" onClick={ClickedButton}>5</button>
                <button value="6" onClick={ClickedButton}>6</button>
                <button value="-" onClick={ClickedButton}>-</button>
                <br/>
                <button value="7" onClick={ClickedButton}>7</button>
                <button value="8" onClick={ClickedButton}>8</button>
                <button value="9" onClick={ClickedButton}>9</button>
                <button value="*" onClick={ClickedButton}>x</button>
                <br/>
                <button value="(" onClick={ClickedButton}>(</button>
                <button value=")" onClick={ClickedButton}>)</button>
                <button value="0" onClick={ClickedButton}>0</button>
                <button value="/" onClick={ClickedButton}>÷</button>
                <br/>
                <button value="." onClick={ClickedButton}>.</button>
                <button value="DEL" onClick={ClickedButton}>DEL</button>
                <button value="->" onClick={ClickedButton}>-></button>
                <button value="=" onClick={ClickedButton}>=</button>
            </div>
        );
    }
}



export default (Buttons);