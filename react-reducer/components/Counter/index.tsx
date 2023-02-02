import useCounter from 'hooks/useCounter';
import React, { useReducer } from 'react';

import styles from './index.module.css';

interface State {
    count: number;
}

interface Action {
    type: 'increment' | 'decrement';
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className={styles.container}>
            <h1 data-testid="count">
                {state.count}
            </h1>
            <div>
                <button data-testid="increment" onClick={() => dispatch({ type: 'increment' })}>
                    Increment
                </button>
                <button data-testid="decrement" onClick={() => dispatch({ type: 'decrement' })}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;