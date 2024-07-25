import "./AgeSection.css";
import ageOne from "../../assets/category-img1.gif";
import ageTwo from "../../assets/category-img2.gif";
import ageTre from "../../assets/category-img3.gif";
import ageFour from "../../assets/category-img4.gif";

const AgeSection = () => {
  const collections = [
    { name: "De 0 a 24 Meses", link: "/collection?edad=1", img: ageOne },
    { name: "De 2 A 4 Años", link: "/collection?edad=2", img: ageTwo },
    { name: "De 5 A 7 Años", link: "/collection?edad=3", img: ageTre },
    { name: "8 Años o Mas", link: "/collection?edad=4", img: ageFour },
  ];

  return (
    <div className='age-section'>
      <h2>Busca por edades</h2>
      <div className='collections-grid'>
        {collections.map((collection, index) => (
          <a key={index} href={collection.link} className='collection-card'>
            <div className='collection-card__content'>
              <img
                style={{ width: "232px", height: "232px", borderRadius: "5px" }}
                src={collection.img}
              />
              <p>{collection.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AgeSection;
