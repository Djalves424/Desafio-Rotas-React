import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./routes/Home/Inicio";
import Produtos from "./routes/Home/Produtos";
import Sobre from "./routes/Home/Sobre";
import Home from "./routes/Home";
import NaoEncontado from "./routes/Home/NaoEncontrado";
import Computadores from "./routes/Home/Produtos/Computadores";
import Eletronicos from "./routes/Home/Produtos/Eletronicos";
import Livros from "./routes/Home/Produtos/Livros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Inicio />} />
          <Route path="/products" element={<Produtos />}>
            <Route path="computers" element={<Computadores />} />
            <Route path="electronics" element={<Eletronicos />} />
            <Route path="books" element={<Livros />} />
          </Route>
          <Route path="about" element={<Sobre />} />
          <Route path="*" element={<NaoEncontado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
