import {Button} from "@mui/material";
import styles from './styles.module.css'
import {Container} from "@/shared/ui/container/Container.tsx";
import Input from "@/shared/ui/input/Input.tsx";

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <Container>
                <div className={styles.newsletterWrapper}>
                    <div className={styles.newsletterText}>
                        <h2>Join Our Newsletter</h2>
                        <p>We love to surprise our subscribers with occasional gifts.</p>
                    </div>
                    <form className={styles.newsletterUi}>
                        <Input type='email' placeholder='Your email address'/>
                        <Button sx={{
                            background: 'black',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '175%',
                            textTransform: 'capitalize',
                            padding: '10px 24px',
                            '&:hover': {
                                backgroundColor: '#202533'
                            }
                        }} variant='contained' color='primary'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;