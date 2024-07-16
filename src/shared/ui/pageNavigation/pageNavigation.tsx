import styles from './styles.module.css'
import {FC} from "react";
import {TYPE_NAME_PAGE} from "./types.ts";
import {Container} from "@/shared/ui/container/Container.tsx";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb.tsx";

const PageNavigation: FC<TYPE_NAME_PAGE> = ({namePage}) => {
    return (
        <div className={styles.namePage}>
            <Container>
                <div className={styles.namePageWrapper}>
                    <h2>{namePage}</h2>
                    <Breadcrumb/>
                </div>
            </Container>
        </div>
    );
};

export default PageNavigation;