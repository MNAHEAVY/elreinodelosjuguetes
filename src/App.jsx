import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UtilityBar from "./Components/UtilityBar/UtilityBar";
import StickyHeader from "./Components/StickyHeader/StickyHeader";
import Footer from "./Components/Footer/Footer";
import Landing from "./Views/Landing/Landing";
import Novedades from "./Views/Novedades/Novedades";
import Edad from "./Views/Edad/Edad";
import Juegos from "./Views/Juegos/Juegos";
import Juguetes from "./Views/Juguetes/Juguetes";
import Search from "./Views/Search/Search";
import ProductDetail from "./Views/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <UtilityBar />
      <StickyHeader />
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/novedades' element={<Novedades />} />
          <Route exact path='/collection' element={<Edad />} />
          <Route exact path='/juegos' element={<Juegos />} />
          <Route exact path='/juguetes' element={<Juguetes />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/detail/:id' element={<ProductDetail />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
