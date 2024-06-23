import {FC} from "react";
import {TYPE_INPUT} from "@components/ui/input/types.ts";
import styles from  './style.module.css'

const Input: FC<TYPE_INPUT> = ({children, placeholder,label,type}) => {
    return (
        <div>
            {children}
            <label>
                {label}
                <input className={styles.input} type={type} placeholder={placeholder}/>
            </label>
        </div>
    );
};

export default Input;