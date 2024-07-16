import Offers from "@/widgets/offers/ui/Offers.tsx";
import WhyUs from "@/widgets/whyUs/ui/WhyUs.tsx";
import BestSelling from "@/widgets/bestSelling/ui/BestSelling.tsx";
import FashionParadise from "@/widgets/fashionParadise/ui/FashionParadise.tsx";
import Recommendations from "@/widgets/recommendations/ui/Recommendations.tsx";
import Newsletter from "@/widgets/newsletter/ui/Newsletter.tsx";

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