import ProductList from "@components/productList/ProductList.tsx";
import {Container} from "@components/container/Container.tsx";
import styles from './styles.module.css'

const prodArray = [{
    productName: 'Classic Monochrome Tees',
    inStock: true,
    price: 35
}, {
    productName: 'Classic Monochrome Tees',
    inStock: true,
    price: 35
}, {
    productName: 'Classic Monochrome Tees',
    inStock: true,
    price: 35
}, {
    productName: 'Classic Monochrome Tees',
    inStock: true,
    price: 35
}]

const BestSelling = () => {
    return (
        <section className={styles.bestSelling}>
            <Container>
                <div className={styles.bestSellingTitle}>
                    <div className={styles.bestSellingTitleInner}>
                        <p>Shop Now</p>
                        <h3>Best Selling</h3>
                    </div>
                </div>
                <ProductList productList={prodArray}/>
            </Container>
        </section>
    );
};

export default BestSelling;