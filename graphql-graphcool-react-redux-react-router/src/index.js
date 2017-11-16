import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Home from './components/home/Home';
import { client } from './config/client';
import { store } from './config/store';
import registerServiceWorker from './registerServiceWorker';

const history = syncHistoryWithStore(createHistory(), store);

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
