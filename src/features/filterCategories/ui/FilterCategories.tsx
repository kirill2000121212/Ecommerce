import {useDispatch, useSelector} from "react-redux";
import {checkCheckbox} from '@/features/filterCategories/model/slices/checkboxSlice.ts'
import styles from './styles.module.css'
import CheckBoxItem from "@/shared/ui/checkBoxItem/CheckBoxItem.tsx";

const FilterCategories = () => {
    const selector = useSelector(({checkboxSlice}) => checkboxSlice)

    const dispatch = useDispatch()

    const onChecked = (label) => {
        dispatch(checkCheckbox(label))
        console.log(selector)
    }

    return (
        <section>
            <div>
                <p>Categories</p>
                <ul className={styles.searchSectionList}>
                    {
                        selector?.map(({label}) => (
                            <li className={styles.searchSectionItem}>
                            <CheckBoxItem
                                key={label}
                                label={label}
                                onChange={() => onChecked(label)}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default FilterCategories;