import React from 'react';
import './Root.scss';
import { MainPage } from '../MainPage';

export class Root extends React.PureComponent<IProps, IState> {

    public render() {
        return (
            <div>
                <MainPage>
                    <button>Additional button</button>
                </MainPage>
            </div>
        );
    }

}

interface IProps {
}

interface IState {
}
