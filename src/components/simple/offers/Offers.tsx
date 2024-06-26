import styles from './styles.module.css';
import {Container} from "@components/simple/container/Container.tsx";
import {Button} from "@mui/material";
import ArrowRight from "@/assets/icons/sharedIcons/Arrow Right.svg";
import Man from "@public/man.png";

const Offers = () => {
    return (
        <section className={styles.section}>
                <Container>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.sectionInfo}>
                            <h2>Fresh Arrivals Online</h2>
                            <p>Discover Our Newest Collection Today.</p>
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
                            }>View Collection</Button>
                        </div>
                        <img src={Man} alt="Man" height={382} width={340}/>
                    </div>
                </Container>
        </section>
    );
};

export default Offers;