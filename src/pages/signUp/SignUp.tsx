import PageNavigation from "@components/smart/pageNavigation/pageNavigation.tsx";
import {Container} from "@components/simple/container/Container.tsx";
import styles from './styles.module.css'
import FormSignUp from "@components/smart/formSignUp/FormSignUp.tsx";

const SignUp = () => {


    return (
        <div className={styles.signUp}>
            <PageNavigation namePage='Sign Up'/>
            <Container>
                    <FormSignUp/>
            </Container>
        </div>
    );
};

export default SignUp;