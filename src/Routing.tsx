import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import CreateEmployee from './components/CreateEmployee';
import Report from './components/ListEmployee';

var data = {
    isAuthed: true,
    name: 'khazi',
    id: 123,
    token: 'khazi123'
};

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    {/* Ensure an exact route match */}
                    <Redirect from="/create" to="/create-employess" />
                    <Redirect from="/list" to="/list-employees" />

                    {/* Routes */}
                    <Route path="/create-employess" component= {() => <CreateEmployee user={data} />} />
                    <Route path="/list-employees" component={() => <Report user={data} />} />}
                    {/* Catch-all */}
                    <Redirect from="/" to="/create-employess" />
                </Switch>
            </div>
        );
    }   
};

export default Routing;