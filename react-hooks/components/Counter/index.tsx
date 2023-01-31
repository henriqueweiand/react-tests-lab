import useCounter from 'hooks/useCounter';
import React from 'react';

import styles from './index.module.css';

const Counter: React.FC = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div className={styles.container}>
            <h1>
                {count}
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;