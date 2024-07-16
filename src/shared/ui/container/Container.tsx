import styles from './style.module.css';
import {PropsWithChildren} from "react";

export const Container = ({ children } : PropsWithChildren) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    );
};