import styles from './styles.module.css'
import {Container} from "@/shared/ui/container/Container.tsx";
import TabList from "@/widgets/tabList/ui/TabList.tsx";
import ProductList from "@/widgets/productList/ui/ProductList.tsx";

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