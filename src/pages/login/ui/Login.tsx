import {Container} from "@/shared/ui/container/Container.tsx";
import PageNavigation from "@/shared/ui/pageNavigation/pageNavigation.tsx";
import FormLogin from "@/widgets/formLogin/ui/FormLogin.tsx";

const Login = () => {
    return (
        <section>
            <Container>
                <PageNavigation namePage='Login'/>
                <FormLogin/>
            </Container>
        </section>
    );
};

export default Login;