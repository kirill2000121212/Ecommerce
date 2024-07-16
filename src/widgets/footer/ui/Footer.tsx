import {Container} from "@/shared/ui/container/Container.tsx";
import {Link} from "react-router-dom";
import styles from './styles.module.css'
import LogoFooter from '@/shared/assets/icons/publicIcon/logoFooter.svg'
import Git from '@/shared/assets/icons/socialIcon/Github.svg'
import Instagram from '@/shared/assets/icons/socialIcon/Instagram.svg'
import Youtube from '@/shared/assets/icons/socialIcon/Youtube.svg'
import Mastercard from '@/shared/assets/icons/coloredIcon/Mastercard.svg'
import Amex from '@/shared/assets/icons/coloredIcon/Amex.svg'
import Visa from '@/shared/assets/icons/coloredIcon/Visa.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerWrapper}>
                    <div className={styles.social}>
                        <img src={LogoFooter} alt="LogoFooter"/>
                        <p>DevCut is a YouTube channel for practical project-based learning.</p>
                        <ul className={styles.socialList}>
                            <li>
                                <Link to={'/'}>
                                    <img src={Git} alt="Git"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <img src={Instagram} alt="Instagram"/>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <img src={Youtube} alt="Youtube"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerList}>
                        <div className={styles.footerListItem}>
                            <p>Support</p>
                            <ul>
                                <li>
                                    <Link to={'/'}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Terms of use</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerListItem}>
                            <p>Company</p>
                            <ul>
                                <li>
                                    <Link to={'/'}>About us</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Contact</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Careers</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerListItem}>
                            <p>Shop</p>
                            <ul>
                                <li>
                                    <Link to={'/'}>My Account</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Checkout</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.acceptedPayments}>
                        <p>Accepted payments</p>
                        <div className={styles.acceptedPaymentsImages}>
                            <img src={Mastercard} alt=""/>
                            <img src={Amex} alt="Amex"/>
                            <img src={Visa} alt="Visa"/>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>© 2023 DevCut. All rights reserved.</p>
            </Container>
        </footer>
    );
};