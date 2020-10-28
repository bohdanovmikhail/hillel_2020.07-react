import React from 'react';

function zeros(value: number, length: number): string {
    return value.toString().padStart(length, '0');
}

function PresentTime({ time }: { time: number }) {
    const milliseconds = time % 1000;
    const totalSeconds = (time - milliseconds) / 1000;

    const seconds = totalSeconds % 60;
    const totalMinutes = (totalSeconds - seconds) / 60;

    const minutes = totalMinutes % 60;
    const hours = (totalMinutes - minutes) / 60;

    return (
        <React.Fragment>
            {zeros(hours, 2)}:{zeros(minutes, 2)}:{zeros(seconds, 2)}.{zeros(milliseconds, 3)}
        </React.Fragment>
    );
}

export class Timer extends React.Component<Props, State> {
    public state: State = {
        timerId: 0,
        time: 0,
        currentTime: 0,
    };

    constructor(props: Props) {
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    public render() {
        return (
            <div className="timer">
                <div className="time">
                    <PresentTime time={this.state.currentTime} />
                </div>
                {this.controls()}
            </div>
        );
    }

    private controls() {
        return (
            <div className="btn-group controls">
            <button className="btn btn-secondary play" onClick={this.start}>
                <i className="fas fa-play"></i>
            </button>

            <button className="btn btn-secondary pause" onClick={this.stop}>
                <i className="fas fa-pause"></i>
            </button>

            <button className="btn btn-secondary reset" onClick={this.reset}>
                <i className="fas fa-redo-alt"></i>
            </button>

            <button className="btn btn-secondary remove" onClick={this.props.onRemove}>
                <i className="fas fa-trash"></i>
            </button>
            </div>
        );
    }

    private start(): void {
    	if (this.state.timerId) {
            return;
        }

        const { time } = this.state;
 
        this.setState({
            time: Date.now() - time,
            timerId: window.setInterval(() => this.update(), 15),
        })
    }
    
    private stop(): void {
        const { timerId } = this.state;

    	if (!timerId) {
            return;
        }

        window.clearInterval(timerId);

        this.setState({
            time: this.getDiff(),
            timerId: 0,
        });
    }

    private reset(): void {
        this.stop();

        this.setState({
            time: 0,
        });

        this.update();
    }

    private update(): void {
        this.setState({
            currentTime: this.getDiff(),
        })
    }

    private getDiff(): number {
        const { time } = this.state;

    	return time && Date.now() - time;
    }
}

interface Props {
    onRemove?: () => void;
}

interface State {
    timerId: number;
    time: number;
    currentTime: number;
}