import Delivery from '@/assets/icons/sharedIcons/Delivery.svg'
import StarBadge from '@/assets/icons/sharedIcons/Star Badge.svg'
import ShieldCheck from '@/assets/icons/sharedIcons/Shield Check.svg'
import styles from './styles.module.css'
import {Container} from "@components/container/Container.tsx";

const WhyUs = () => {
    return (
        <section className={styles.whyUs}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src={Delivery} alt="Delivery"/>
                        <p>Free Shipping</p>
                        <p>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
                    </li>
                    <li className={styles.listItem}>
                        <img src={StarBadge} alt="StarBadge"/>
                        <p>Satisfaction Guarantee</p>
                        <p>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
                    </li>
                    <li className={styles.listItem}>
                        <img src={ShieldCheck} alt="ShieldCheck"/>
                        <p>Secure Payment</p>
                        <p>Your security is our priority. Your payments are secure with us.</p>
                    </li>
                </ul>
            </Container>
        </section>
    );
};

export default WhyUs;