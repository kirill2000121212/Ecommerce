import styles from './styles.module.css'
import {Button} from "@mui/material";
import FashionParadiseImg from '@/shared/assets/icons/publicIcon/fashionParadise.png'
import ArrowRight from "@/shared/assets/icons/sharedIcons/Arrow Right.svg";
import {Container} from "@/shared/ui/container/Container.tsx";

const FashionParadise = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.sectionWrapper}>
                    <div className={styles.sectionInfo}>
                        <h2>Browse Our Fashion Paradise!</h2>
                        <p>Step into a world of style and explore our diverse collection of clothing categories.</p>
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
                        }} variant='contained' color='primary' endIcon={
                            <img src={ArrowRight} alt="ArrowRight"/>
                        }>Start Browsing</Button>
                    </div>
                    <img src={FashionParadiseImg} alt="Man" height={311} width={225}/>
                </div>
            </Container>
        </section>
    );
};

export default FashionParadise;