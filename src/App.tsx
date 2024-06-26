import {Layout} from "@components/simple/layout/Layout.tsx";
import Offers from "@components/simple/offers/Offers.tsx";
import WhyUs from "@components/simple/whyUs/WhyUs.tsx";
import BestSelling from "@components/simple/bestSelling/BestSelling.tsx";
import FashionParadise from "@components/simple/fashionParadise/FashionParadise.tsx";
import Recommendations from "@components/smart/recommendations/Recommendations.tsx";

const App = () => {
    return (
        <Layout>
            <Offers/>
            <WhyUs/>
            <BestSelling/>
            <FashionParadise/>
            <Recommendations/>
        </Layout>
    );
};

export default App;
