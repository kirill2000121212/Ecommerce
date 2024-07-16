import styles from './styles.module.css'
import {Container} from "@/shared/ui/container/Container.tsx";
import PageNavigation from "@/shared/ui/pageNavigation/pageNavigation.tsx";
import FormSignUp from "@/widgets/formSignUp/ui/FormSignUp.tsx";

const SignUp = () => {
    return (
        <section className={styles.signUp}>
            <Container>
                <PageNavigation namePage='Sign Up'/>
                <FormSignUp/>
            </Container>
        </section>
    );
};

export default SignUp;