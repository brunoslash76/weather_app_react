import React from 'react';
import { css } from 'aphrodite';

import Styles from './HeaderLayout.styles';

const HeaderLayout = (props) => {
    
    return (
        <div className={css(Styles.headerContainer)}>
            <div className={css(Styles.headerInnerContainer)}>
                {props.children}
            </div>
        </div>
    );
}

export default HeaderLayout
