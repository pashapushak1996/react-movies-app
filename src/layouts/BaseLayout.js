import React from "react";
import styles from './BaseLayout.module.css'
import {Link} from "react-router-dom";

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header><Link to={'/'}>Header</Link></header>
                <main>{children}</main>
                <footer>Footer</footer>
        </div>
);
}

