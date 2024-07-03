import "./AgeSection.css";

const AgeSection = () => {
  const collections = [
    { name: "Colección 1", link: "/collection/1" },
    { name: "Colección 2", link: "/collection/2" },
    { name: "Home page", link: "/" },
    { name: "Colección 3", link: "/collection/3" },
  ];

  return (
    <div className='age-section'>
      <h2>Busca por edades</h2>
      <div className='collections-grid'>
        {collections.map((collection, index) => (
          <a key={index} href={collection.link} className='collection-card'>
            <div className='collection-card__content'>
              <p>{collection.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AgeSection;
