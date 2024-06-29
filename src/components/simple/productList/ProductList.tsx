import {FC} from "react";
import {TYPE_PRODUCT_LIST} from "@components/simple/productList/type.ts";
import ProductItem from "@components/simple/productItem/ProductItem.tsx";
import styles from './styles.module.css'

const ProductList: FC<TYPE_PRODUCT_LIST> = ({productList}) => {
    return (
        <div className={styles.productList}>
            {
                productList.map(({productName,inStock,price}, index)=>(
                    <ProductItem key={index} productName={productName} inStock={inStock} price={price}/>
                ))
            }
        </div>
    );
};

export default ProductList;