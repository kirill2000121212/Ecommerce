import {PropsWithChildren} from "react";
import {Header} from "@components/simple/header/Header.tsx";
import {Footer} from "@components/simple/footer/Footer.tsx";
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