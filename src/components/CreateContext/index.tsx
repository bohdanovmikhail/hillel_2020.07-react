import React from 'react';
import { TestContext } from '../../contexts/test-context';

export function CreateContext(props: any) {
    return (
        <TestContext.Provider value={{ key: 'value123' }}>
            {props.children}
        </TestContext.Provider>
    )
}