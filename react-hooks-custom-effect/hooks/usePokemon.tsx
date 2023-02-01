import { useEffect, useState } from 'react';

interface PokemonAPIResponseInterface {
    sprites: {
        front_default: string
    }
    name: string
}

export default function usePokemon(pokemonName?: string) {
    const [pokemon, setPokemon] = useState<PokemonAPIResponseInterface>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                const json = await response.json()
                // console.log('############', json)
                setPokemon(json);
            } catch (e) {
                setError(e as any);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [pokemonName]);

    return { pokemon, isLoading, error }
}
