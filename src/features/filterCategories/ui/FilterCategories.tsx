import {useDispatch, useSelector} from "react-redux";
import {checkCheckbox} from '@/features/filterCategories/model/slices/checkboxSlice.ts'
import styles from './styles.module.css'
import CheckboxItem from "@/shared/ui/checkboxCategories/CheckboxItem.tsx";

const FilterCategories = () => {
    const selector = useSelector(({checkboxSlice}) => checkboxSlice)
    const dispatch = useDispatch()

    const onChecked = (label) => {
        dispatch(checkCheckbox(label))
    }

    return (
            <div className={styles.FilterCategories}>
                <p className={styles.filterCategoriesLabel}>Categories</p>
                <ul className={styles.filterCategoriesList}>
                    {
                        selector?.map(({label}) => (
                            <li className={styles.filterCategoriesItem} key={label}>
                            <CheckboxItem
                                label={label}
                                onChange={() => onChecked(label)}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
    );
};

export default FilterCategories;