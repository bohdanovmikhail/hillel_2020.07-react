import React from 'react';
import './App2.scss';
import { Timer } from './components/Timer';

export default class App extends React.Component<Props, State> {
    public state: State = {
        timers: []
    };

    constructor(props: Props) {
        super(props);

        this.addTimer = this.addTimer.bind(this);
        this.clearTimers = this.clearTimers.bind(this);
    }

    public render() {
        return (
            <div>
                {this.controls()}
                {this.timers()}
            </div>
        );
    }

    private timers() {
        return (
            <div>
                {this.state.timers.map((key: number) => (
                    <Timer
                        key={key}
                        onRemove={() => {
                            this.setState({
                                timers: this.state.timers.filter((k: number) => k !== key),
                            });
                        }}
                    />
                ))}
            </div>
        )
    }

    private controls() {
        return (
            <div className="timers-control">
                <button className="btn btn-success" onClick={this.addTimer}>
                    <i className="fas fa-plus" />
                </button>
                <button className="btn btn-danger" onClick={this.clearTimers}>
                    <i className="fas fa-trash" />
                    </button>
            </div>
        );
    }

    private addTimer(): void {
        const timers = this.state.timers;

        this.setState({
            timers: [...timers, timers.length],
        })
    }

    private clearTimers(): void {
        this.setState({
            timers: [],
        });
    }
}

interface Props {
}

interface State {
    timers: number[];
}