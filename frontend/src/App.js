import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Tambah from "./pages/Tambah";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/tambah" element={<Tambah />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
