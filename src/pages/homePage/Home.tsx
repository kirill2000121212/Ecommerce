import Offers from "@components/simple/offers/Offers.tsx";
import WhyUs from "@components/simple/whyUs/WhyUs.tsx";
import BestSelling from "@components/simple/bestSelling/BestSelling.tsx";
import FashionParadise from "@components/simple/fashionParadise/FashionParadise.tsx";
import Recommendations from "@components/smart/recommendations/Recommendations.tsx";
import Newsletter from "@components/simple/newsletter/Newsletter.tsx";

const Home = () => {
    return (
        <section>
            <Offers/>
            <WhyUs/>
            <BestSelling/>
            <FashionParadise/>
            <Recommendations/>
            <Newsletter/>
        </section>
    );
};

export default Home;