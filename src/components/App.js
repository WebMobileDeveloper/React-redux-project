import React from 'react';
import Contact from './Contact';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <Contact/>
        );
    }
}

