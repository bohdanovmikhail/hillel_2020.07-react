import React from 'react';
import { TestContext } from '../../contexts/test-context';

export function UseContext() {
    function child(ctx: string) {
        console.log(arguments);
        return (
            <div>
                {JSON.stringify(ctx)}
            </div>
        )
    };

    return (
        <TestContext.Consumer>
            {child}
        </TestContext.Consumer>
    );
}