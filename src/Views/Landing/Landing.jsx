import AgeSection from "../../Components/AgeSection/AgeSection";
import Carrousel from "../../Components/Carrousel/Carrousel";
import BannerSection from "../../Components/BannerSection/BannerSection";
import OwlCarouselComponent from "../../Components/Carousel/Carousel";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Landing = () => {
  return (
    <>
      <Carrousel />
      <AgeSection />
      <BannerSection />
      <FeaturedProducts />
      <OwlCarouselComponent />
    </>
  );
};

export default Landing;
