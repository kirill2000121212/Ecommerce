import {PropsWithChildren} from "react";
import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import styles from "./style.module.css"

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.layout}>
            <Header/>
                <main className={styles.content}>
                    {children}
                </main>
            <Footer/>
        </div>
    );
};