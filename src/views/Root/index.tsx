import React from 'react';
import './Root.scss';
import { MainPage } from '../MainPage';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { About } from '../About';

export class Root extends React.PureComponent<IProps, IState> {

    public render() {
        return (
            <BrowserRouter>
                <Link to="/">Main page</Link>
                <Link to="/about">Main page</Link>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

interface IProps {
}

interface IState {
}
