import styles from './styles.module.css'
import {Container} from "@/shared/ui/container/Container.tsx";
import ProductList from "@/entities/productList/ui/ProductList.tsx";

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