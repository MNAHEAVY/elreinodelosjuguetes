import UtilityBar from "./Components/UtilityBar/UtilityBar";
import StickyHeader from "./Components/StickyHeader/StickyHeader";
import Carrousel from "./Components/Carrousel/Carrousel";
import AgeSection from "./Components/AgeSection/AgeSection";
import BannerSection from "./Components/BannerSection/BannerSection";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import OwlCarouselComponent from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <UtilityBar />
      <StickyHeader />
      <Carrousel />
      <AgeSection />
      <BannerSection />
      <FeaturedProducts />
      <OwlCarouselComponent />
      <Footer />
    </>
  );
}

export default App;
