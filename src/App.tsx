import React from 'react';

import './App.css';
import { Counter } from './components/Counter';


export default class App extends React.PureComponent<{}, State> {
  public state: State = {
    counters: [],
    name: '',
  };

  constructor(props: any) {
    super(props);

    this.addCounter = this.addCounter.bind(this);
    this.changeInput = this.changeInput.bind(this); 
  }

  public render() {
    const controls = this.controls();
    const counters = this.state.counters.map((message: string) => (
      <div key={message}>
        <Counter message={message} />
        <button onClick={() => this.removeCounter(message)}>X</button>
      </div>
    ));

    return (
      <div>
        {controls}
        {counters}
      </div>
    );
  }

  private controls() {
    const { name } = this.state;

    return (
      <div className="controls">
        <input
          type="text"
          placeholder="Counter name"
          value={name}
          onChange={this.changeInput}
        />

        <button onClick={this.addCounter}>Add counter</button>
      </div>
    );
  }

  private changeInput(event: any): void {
    this.setState({
      name: event.target.value
    });
  }

  private addCounter(): void {
    const { counters, name } = this.state;

    if (!name) {
      return;
    }

    this.setState({
      counters: [...counters, name],
      name: '',
    });
  }

  private removeCounter(message: string): void {
    const counters = this.state.counters;

    this.setState({
      counters: counters.filter((m: string) => m !== message),
    })
  }
}

interface State {
  counters: string[];
  name: string;
}