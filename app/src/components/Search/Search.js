import React from 'react';
import Styles from './Search.styles';

import ButtonSearch from '../ButtonSearch/ButtonSearch';
import { css } from 'aphrodite';

const Search = (props) => {
    return (
        <div className={css(Styles.searchComponentContainer)}>
            <div>
                <input />
            </div>
            <div>
                <ButtonSearch isLoading={props.isSearching}/>
            </div>
        </div>
    );
}

export default Search;
