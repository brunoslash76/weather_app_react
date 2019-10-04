import React from 'react';

import HeaderLayout from '../../layout/HeaderLayout/HeaderLayout';
import Search from '../Search/Search';
import { css } from 'aphrodite';

const Header = (props) => {
    console.log(props)
    return (
        <HeaderLayout>
            <div>
                <img className="logo" />
            </div>
            <div>
                <Search />
            </div>
        </HeaderLayout>
    )
};

export default Header;
