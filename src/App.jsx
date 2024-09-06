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
import Marcas from "./Views/Marcas/Marcas";
import Admin from "./Views/Admin/dashboard";

function App() {
  return (
    <>
      <Router>
        <UtilityBar />
        <StickyHeader />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/novedades' element={<Novedades />} />
          <Route exact path='/collection' element={<Edad />} />
          <Route exact path='/juegos' element={<Juegos />} />
          <Route exact path='/juguetes' element={<Juguetes />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/detail/:id' element={<ProductDetail />} />
          <Route exact path='/marcas/:id' element={<Marcas />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
