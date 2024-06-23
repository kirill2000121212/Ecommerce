import {Container} from "../container/Container.tsx";
import Logo from "@public/logo.svg"
import {Link} from "react-router-dom";
import Input from '@components/ui/input/Input.tsx';
import Search from '@/assets/icons/sharedIcons/Search.svg'
import Cart from '@/assets/icons/sharedIcons/Cart.svg'
import ProfileUser from '@/assets/icons/sharedIcons/ProfileUser.svg'
import styles from './style.module.css'
export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerWrapper}>
                    <nav className={styles.nav}>
                        <Link to={'/'}>
                            <img src={Logo} alt="Logo"/>
                        </Link>
                        <ul className={styles.ul}>
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
                    <div className={styles.inputWrapper}>
                        <Input type='text' placeholder='Search products'>
                            <img src={Search} alt="Search"/>
                        </Input>
                            <Link to={'/'}>
                                <img src={Cart} alt="Cart"/>
                            </Link>
                            <Link to={'/'}>
                                <img src={ProfileUser} alt="ProfileUser"/>
                            </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};