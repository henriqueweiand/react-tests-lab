import React from 'react';
import useFetch from '@/hooks/useFetch';

interface DataFetcherProps {
    url: string
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url }) => {
    const data = useFetch(url);
    return <p data-testid="data">{JSON.stringify(data)}</p>;
}

export default DataFetcher;