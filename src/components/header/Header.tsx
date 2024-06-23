import {Container} from "../container/Container.tsx";
import Logo from  "@public/logo.svg"
import {Link} from "react-router-dom";
import Input from '@mui/material/Input';
import Search from '@/assets/icons/sharedIcons/Search.svg'
import Cart from '@/assets/icons/sharedIcons/Cart.svg'
import ProfileUser from '@/assets/icons/sharedIcons/ProfileUser.svg'

export const Header = () => {
    return (
        <header>
            <Container>
                <img src={Logo} alt="Logo"/>
                <nav>
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
                <Input placeholder='Search products' startAdornment={
                    <img src={Search} alt="Search"/>
                }/>
                <button><img src={Cart} alt="Cart"/>hahahahaha</button>
                <button><img src={ProfileUser} alt="ProfileUser"/></button>
            </Container>
        </header>
    );
};