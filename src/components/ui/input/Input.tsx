import {FC} from "react";
import {TYPE_INPUT} from "@components/ui/input/types.ts";
import styles from './style.module.css'

const Input: FC<TYPE_INPUT> = ({children, placeholder,label,type}) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>
                {label}
                {children}
                <input className={styles.input} type={type} placeholder={placeholder}/>
            </label>
        </div>
    );
};

export default Input;