import {FC} from "react";
import {TYPE_PRODUCT_ITEM} from "@components/productItem/type.ts";
import TShirt from "@public/product.png"
import styles from './styles.module.css'

const ProductItem: FC<TYPE_PRODUCT_ITEM> = ({productName, inStock, price}) => {
    const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(
        price
    )

    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={TShirt} alt="TShirt"/>
            </div>
            <p className={styles.productName}>{productName}</p>
            <div className={styles.productInfo}>
                <div className={styles.productStock}>{inStock ? 'in stock' : 'no stock'}</div>
                <p className={styles.productPrice}>{currency}</p>
            </div>
        </div>
    );
};

export default ProductItem;