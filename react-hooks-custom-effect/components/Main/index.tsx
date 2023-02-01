import usePokemon from 'hooks/usePokemon';
import React from 'react';

import styles from './index.module.css';

const Main: React.FC = () => {
    const { isLoading, pokemon, error } = usePokemon('pikachu');

    if (isLoading) {
        return <>Loading</>
    }

    if (error) {
        return <>Error</>
    }

    return (
        <div className={styles.container}>
            <img src={pokemon?.sprites.front_default} alt="pokemon" />
            <h1>
                {pokemon?.name}
            </h1>
        </div>
    );
}

export default Main;