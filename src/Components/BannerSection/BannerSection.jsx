import "./BannerSection.css"; // Asegúrate de incluir tus estilos CSS

const BannerSection = () => {
  return (
    <section className='banner-section'>
      <img
        src='https://i.ytimg.com/vi/ih7UGBj8jTg/maxresdefault.jpg'
        alt='banner'
        className='banner-image'
      />
    </section>
  );
};

export default BannerSection;
