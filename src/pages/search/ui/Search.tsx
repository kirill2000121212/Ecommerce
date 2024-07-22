import {Container} from "@/shared/ui/container/Container.tsx";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb.tsx";
import SearchWrapper from "@/widgets/searchWrapper/ui/SearchWrapper.tsx";

const Search = () => {
    return (
        <section>
            <Container>
                <Breadcrumb/>
                <SearchWrapper/>
            </Container>
        </section>
    );
};

export default Search;