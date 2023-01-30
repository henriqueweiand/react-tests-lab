import React, { useState, ChangeEvent } from 'react';
import Button from '@/components/Button';

import styles from './index.module.css';

interface SearchBoxProps {
    requestSearch: (query: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ requestSearch }) => {
    const [query, setQuery] = useState<string>("");

    const searchClick = () => {
        if (query) {
            requestSearch(query);
        }
    }

    const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    return (
        <div className={styles.container}>
            <input placeholder='Search' onChange={updateQuery} type="text" name="search" value={query} />
            <Button data-testid="search-button" onClick={searchClick} />
        </div>
    );
}

export default SearchBox;