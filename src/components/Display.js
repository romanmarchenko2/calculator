import React from 'react';
import "./Display.css"

class Display extends React.Component {

    render() {

        let {result} = this.props;

        return (
            <div>
                <div className="result">
                    <input type="text" disabled value={result} placeholder="Enter: " />
                </div>
            </div>
        );
    }
    }
export default Display;