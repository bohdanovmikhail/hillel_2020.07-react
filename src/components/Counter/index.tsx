import React from 'react';
import './Counter.scss';


export class Counter extends React.Component<Props> {
    public state = {
        counter: 0,
        counter2: 0,
    };

    constructor(props: any) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    public render() {
        console.log('Render');
        const { message } = this.props;
        const { counter } = this.state;

        return (
            <div className="counter">
                {message}:
                <button onClick={this.decrement}>&lt;</button>
                {counter}
                <button onClick={this.increment}>&gt;</button>
            </div>
        );
    }

    private increment(): void {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    private decrement(): void {
        this.setState({
            counter: this.state.counter - 1
        });
    }
}

interface Props {
    message: string;
}
