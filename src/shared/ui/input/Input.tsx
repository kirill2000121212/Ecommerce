import {FC} from "react";
import {TYPE_INPUT} from "./types.ts";
import styles from './style.module.css'
import {useForm} from "react-hook-form";

const Input: FC<TYPE_INPUT> = ({
                                   children,
                                   placeholder,
                                   label,
                                   type,
                                   register,
                                   pattern,
                                   required
                               }) => {
    const {register : OriginalRegister} = useForm();

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>
                {label}
                {children}
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    {...register?.call(OriginalRegister,label,pattern,required)}/>
            </label>
        </div>
    );
};

export default Input;