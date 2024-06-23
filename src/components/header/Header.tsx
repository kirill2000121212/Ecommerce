import {Container} from "../container/Container.tsx";
import Logo from "@public/logo.svg"
import {Link} from "react-router-dom";
import Input from '@components/ui/input/Input.tsx';
import Search from '@/assets/icons/sharedIcons/Search.svg'
import Cart from '@/assets/icons/sharedIcons/Cart.svg'
import ProfileUser from '@/assets/icons/sharedIcons/ProfileUser.svg'

export const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo"/>
                    </Link>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Categories</Link>
                        </li>
                        <li>
                            <Link to={'/'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Input placeholder='Search products'>
                        <img src={Search} alt="Search"/>
                    </Input>
                    <Link to={'/'}>
                        <img src={Cart} alt="Cart"/>
                    </Link>
                    <Link to={'/'}>
                        <img src={ProfileUser} alt="ProfileUser"/>
                    </Link>
                </div>
            </Container>
        </header>
    );
};