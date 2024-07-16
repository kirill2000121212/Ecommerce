import styles from "@/app/layouts/styles.module.css";
import {Header} from "@/widgets/header/ui/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "@/widgets/footer/ui/Footer.tsx";

export const BaseLayout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.content}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};