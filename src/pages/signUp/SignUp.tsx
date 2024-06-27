import PageNavigation from "@components/smart/pageNavigation/pageNavigation.tsx";
import {Container} from "@components/simple/container/Container.tsx";
import styles from './styles.module.css'

const SignUp = () => {
    return (
        <div className={styles.signUp}>
            <Container>
                <PageNavigation namePage='Sign Up'/>
            </Container>
        </div>
    );
};

export default SignUp;