import {getArrProductList} from "@/entities/searchProductList/helpers/arrProductList.ts";
import ProductItem from "@/entities/productItem/ui/ProductItem.tsx";
import styles from './styles.module.css'

const SearchProductList = () => {
    return (
        <ul className={styles.searchProductList}>
            {
                getArrProductList?.map(({productName,inStock,price}, index)=> (
                    <ProductItem key={index} productName={productName} inStock={inStock} price={price}/>
                ))
            }
        </ul>
    );
};

export default SearchProductList;