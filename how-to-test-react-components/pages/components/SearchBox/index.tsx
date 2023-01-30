import React, { useState } from 'react';
import Button from '../Button';

import styles from './index.module.css';

interface SearchBoxProps {
    requestSearch: (query: any) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ requestSearch }) => {
    const [query, setQuery] = useState("");

    const searchClick = () => {
        if (query) {
            requestSearch(query);
        }
    }

    const updateQuery = (e: any) => {
        setQuery(e.target.value);
    }

    return (
        <div className={styles.container}>
            <input placeholder='Search' onChange={updateQuery} type="text" name="search" value={query} />
            <Button onClick={searchClick} />
        </div>
    );
}

export default SearchBox;