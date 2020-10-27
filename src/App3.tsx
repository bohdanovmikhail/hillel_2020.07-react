import React, { useState } from 'react';
import cn from 'classnames';
import './App3.scss';

export function AppFN() {
    console.log('FN called');
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    const className = cn('button', {
        active: isActive,
    });

    return (
        <button onClick={toggle} className={className}>
            Click me!
        </button>
    );
}

export class AppClass extends React.Component {
    public state = {
        isActive: false,
    };

    constructor(props: any) {
        super(props);
        console.log('Class created');

        // this.toggleActive = this.toggleActive.bind(this);
    }

    public render() {
        const className = cn('button', {
            active: this.state.isActive,
        });

        return (
            <button onClick={this.toggleActive} className={className}>
                Click me!
            </button>
        );
    }

    private toggleActive() {
        this.setState({
            isActive: !this.state.isActive,
        });
    }
}