import {FC} from "react";
import {TYPE_PRODUCT_LIST} from "@components/productList/type.ts";
import ProductItem from "@components/productItem/ProductItem.tsx";
import styles from './styles.module.css'

const ProductList: FC<TYPE_PRODUCT_LIST> = ({productList}) => {
    return (
        <div className={styles.productList}>
            {
                productList.map(({productName,inStock,price})=>(
                    <ProductItem productName={productName} inStock={inStock} price={price}/>
                ))
            }
        </div>
    );
};

export default ProductList;