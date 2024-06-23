import {Layout} from "./components/layout/Layout.tsx";
import Offers from "@components/ui/offers/Offers.tsx";
import WhyUs from "@/sections/whyUs/WhyUs.tsx";
import BestSelling from "@/sections/bestSelling/BestSelling.tsx";

const App = () => {
    return (
        <Layout>
            <Offers/>
            <WhyUs/>
            <BestSelling/>
        </Layout>
    );
};

export default App;
