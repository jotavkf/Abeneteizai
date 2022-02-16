import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PostRef } from "./Pages/PostRef";
import Card from "./Components/Card"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/adicionar-ref" element={<PostRef />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
