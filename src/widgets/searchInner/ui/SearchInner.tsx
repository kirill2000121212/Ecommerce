import AppliedFilters from "@/features/appliedFilters/ui/AppliedFilters.tsx";
import styles from './styles.module.css'
import Sort from "@/features/sort/ui/Sort.tsx";
import SearchProductList from "@/entities/searchProductList/ui/SearchProductList.tsx";

const SearchInner = () => {

    return (
        <div className={styles.searchInner}>
            <AppliedFilters/>
            <Sort/>
            <SearchProductList/>
        </div>
    );
};

export default SearchInner;