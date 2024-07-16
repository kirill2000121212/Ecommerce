import {Container} from "@/shared/ui/container/Container.tsx";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb.tsx";
import SearchSection from "@/features/searchSection/ui/SearchSection.tsx";

const Search = () => {
    return (
        <section>
            <Container>
                <Breadcrumb/>
                <SearchSection/>
            </Container>
        </section>
    );
};

export default Search;