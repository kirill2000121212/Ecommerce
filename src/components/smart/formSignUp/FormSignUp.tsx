import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import Google from "@/assets/icons/coloredIcon/Google.svg";
import Input from "@components/ui/input/Input.tsx";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";

const FormSignUp = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({mode: 'onChange'});

    const onSubmit = data => console.log(data)

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
                    pattern={/^[a-zA-Z][a-zA-Z0-9_.]{2,}$/}
                    required
                    label={'name'} type={'text'}/>
                <div>{errors?.name && <p className={styles.errorText}>Введите имя от 2 до 9 букв!</p>}</div>
                <Input
                    register={register}
                    pattern={/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+\.[A-Z]{2,4}$/i}
                    required
                    label={'email'}
                    type={'email'}/>
                <div>{errors?.email && <p className={styles.errorText}>Неправильная почта!</p>}</div>
                <Input
                    register={register}
                    pattern={/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/g}
                    required
                    label={'password'}
                    type={'password'}/>
                <div>{errors?.password &&
                    <p className={styles.errorText}>Обязательно один спец символ, одна цифра, одна большая буква и
                      маленькая, минимум 8 символов!</p>}</div>
            </div>
            <div className={styles.signUpCreate}>
                <Link className={styles.signUpPrivacyPolicy}
                      to={'/'}>By creating an account you agree with our Terms of Service, Privacy Policy,
                </Link>
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
                      to={'/login'}>Already have an account? Log in
                </Link>
            </div>
        </form>
    );
};

export default FormSignUp;