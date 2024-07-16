import styles from './styles.module.css'
import {FC} from "react";
import {TYPE_TAB_BTN} from "@/shared/ui/tab/types.ts";

const Tab: FC<TYPE_TAB_BTN> = ({children,onClick,isActive}) => {
    return (
        <button onClick={onClick} className={`${isActive ? styles.tabBtn + " " + styles.tabActive : styles.tabBtn}`}>
            {children}
        </button>
    );
};

export default Tab;