import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

class App extends React.Component {

    render () {
        console.log(this.props);
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
