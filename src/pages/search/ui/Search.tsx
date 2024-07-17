import {Container} from "@/shared/ui/container/Container.tsx";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb.tsx";
import FilterCategories from "@/features/filterCategories/ui/FilterCategories.tsx";

const Search = () => {
    return (
        <section>
            <Container>
                <Breadcrumb/>
                <FilterCategories/>
            </Container>
        </section>
    );
};

export default Search;