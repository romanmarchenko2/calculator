import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ""
        };
    }

    onClick = button => {

        if (button === "=") {
            this.equal()

        } else if (button === "->") {
            this.back()

        } else if (button === "DEL") {
            this.resetAction()

        } else if (button === "undo") {
            this.setState({
                result: button
            })

        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    equal = () => {
        let Result = '';

        if (this.state.result.includes('--')) {
            Result = this.state.result.replace('--', '+')
        } else {
            Result = this.state.result
        }

        try {
            this.setState({
              // eslint-disable-next-line no-eval
                result: (eval(Result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "Error"
            })

        }
    };

    resetAction = () => {
        this.setState({
            result: ""
        })
    };

    back = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator">
                    <h1 align='center'>CALCULATOR</h1>
                    <Display result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
