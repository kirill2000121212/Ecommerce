import FilterCategories from "@/features/filterCategories/ui/FilterCategories.tsx";
import styles from './styles.module.css'
import FilterColor from "@/features/filterColor/ui/FilterColor.tsx";
import FIlterSize from "@/features/filterSize/ui/FIlterSize.tsx";
import FilterPrice from "@/features/filterPrice/ui/FilterPrice.tsx";

const FilterSideBar = () => {
    return (
        <div className={styles.filterSideBar}>
            <FilterCategories/>
            <FilterColor/>
            <FIlterSize/>
            <FilterPrice/>
        </div>
    );
};

export default FilterSideBar;