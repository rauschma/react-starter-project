import React from "react";
import {render} from 'react-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            clickCount: 0,
        };
    }
    render() {
        return <div>
            <a href="" onClick={this.handleClick.bind(this)}>Clicks: {this.state.clickCount}</a>
        </div>;
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({
            clickCount: this.state.clickCount + 1,
        });
    }
}

render((
    <Main/>
), document.getElementById('main'));
