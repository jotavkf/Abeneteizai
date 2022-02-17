import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PostRef } from "./Pages/PostRef";
import EditarRef from "./Pages/EditarRef"
import Coleção from "./Pages/Coleção"
import Home from "./Pages/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adicionar-ref" element={<PostRef />} />
      <Route path="/editar-ref/:id" element={<EditarRef />} />
      <Route path="/colecao" element={<Coleção/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
