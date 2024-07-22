import FilterSideBar from "@/widgets/filterSideBar/ui/FilterSideBar.tsx";
import SearchInner from "@/widgets/searchInner/ui/SearchInner.tsx";
import styles from './styles.module.css'

const SearchWrapper = () => {
    return (
        <div className={styles.searchWrapper}>
            <FilterSideBar/>
            <SearchInner/>
        </div>
    );
};

export default SearchWrapper;