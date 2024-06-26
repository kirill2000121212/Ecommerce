import ProductList from "@components/simple/productList/ProductList.tsx";
import {Container} from "@components/simple/container/Container.tsx";
import TabList from "@components/ordinary/tabList/TabList.tsx";
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

const Recommendations = () => {
    return (
        <section className={styles.recommendations}>
            <Container>
                <TabList/>
                <ProductList productList={prodArray}/>
            </Container>
        </section>
    );
};

export default Recommendations;