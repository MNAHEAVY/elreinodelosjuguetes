import "./BannerSection.css";
import cover from "../../assets/cover.png";

const BannerSection = () => {
  return (
    <section className='banner-section'>
      <img src={cover} alt='banner' className='banner-image' />
    </section>
  );
};

export default BannerSection;
