import {Link} from "react-router-dom";
import styles from "./style.module.css";
import Google from "@/shared/assets/icons/coloredIcon/Google.svg";
import {Button} from "@mui/material";
import {FieldValues, useForm} from "react-hook-form";
import Input from "@/shared/ui/input/Input.tsx";

const FormLogin = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({mode: 'onChange'});

    const onSubmit = (data : Record<string, FieldValues>) => console.log(data)

    return (
        <form className={styles.formSignUp} onSubmit={handleSubmit(onSubmit)}>
            <Link to={'/'} className={styles.signUpGoogle}>
                <img src={Google} alt="Google"/>
                Continue with Google
            </Link>
            <div className={styles.signUpOr}>
                <hr/>
                <p>OR</p>
                <hr/>
            </div>
            <div className={styles.signUpInputs}>
                <Input
                    register={register}
                    pattern={/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+\.[A-Z]{2,4}$/i}
                    required
                    label={'Email'}
                    type={'email'}/>
                <div>{errors?.email && <p className={styles.errorText}>Неправильная почта!</p>}</div>
                <Input
                    register={register}
                    pattern={/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/g}
                    required
                    label={'Password'}
                    type={'password'}/>
                <div>{errors?.password &&
                    <p className={styles.errorText}>Обязательно один спец символ, одна цифра, одна большая буква и
                      маленькая, минимум 8 символов!</p>}</div>
            </div>
            <div className={styles.signUpCreate}>
                <Link className={styles.loginPassword}
                      to={'/forgotPassword'}>Forgot Password?</Link>
                <Button
                    type={"submit"}
                    sx={{
                        background: 'black',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '175%',
                        textTransform: 'capitalize',
                        padding: '10px 24px',
                        '&:hover': {
                            backgroundColor: '#202533'
                        }
                    }} variant='contained' color='primary'>
                    Create account
                </Button>
                <Link className={styles.signUpLogin}
                      to={'/signUp'}>Don't have an account? Sign up</Link>
            </div>
        </form>
    );
};

export default FormLogin;