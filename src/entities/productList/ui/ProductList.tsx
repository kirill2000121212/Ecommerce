import {FC} from "react";
import styles from './styles.module.css'
import ProductItem from "@/entities/productItem/ui/ProductItem.tsx";
import {TYPE_PRODUCT_LIST} from "@/entities/productList/ui/types.ts";

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