import {Container} from "../container/Container.tsx";
import logo from  "../../../public/logo.svg"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Container>
                <img src={logo} alt="logo"/>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/'}></Link>
                        </li>
                        <li>
                            <Link to={'/'}></Link>
                        </li>
                        <li>
                            <Link to={'/'}></Link>
                        </li>
                        <li>
                            <Link to={'/'}></Link>
                        </li>
                    </ul>
                </nav>
                <input type="text" placeholder='Search products'/>
            </Container>
        </header>
    );
};