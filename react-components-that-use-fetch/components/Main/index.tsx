import React, { useEffect, useState } from 'react';

import styles from './index.module.css';

interface Joke {
    icon_url: string;
    value: string;
}

const Main: React.FC = () => {
    const [joke, setJoke] = useState<Joke>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJoke = async () => {
            const data = await fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json());
            setJoke(data);
            setIsLoading(false);
        }
        fetchJoke();
    }, [])

    return (
        <div className={styles.container}>
            {
                isLoading ? (
                    <>
                        loading
                    </>
                ) : (
                    <>
                        <img src={joke!.icon_url} alt="logo" />
                        <p>{joke!.value}</p>
                    </>
                )
            }
        </div>
    );
}

export default Main;