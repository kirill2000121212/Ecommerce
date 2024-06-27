import styles from './styles.module.css'
import Breadcrumb from "@components/smart/breadcrumb/Breadcrumb.tsx";
import {FC} from "react";
import {TYPE_NAME_PAGE} from "./types.ts";

const PageNavigation: FC<TYPE_NAME_PAGE> = ({namePage}) => {
    return (
        <div className={styles.namePage}>
            <h2>{namePage}</h2>
            <Breadcrumb/>
        </div>
    );
};

export default PageNavigation;