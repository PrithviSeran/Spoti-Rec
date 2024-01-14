import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import User from './components/home';
import Music from './components/music';
import Info from './components/info';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <br />
      <br/>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/music" element={<Music />} />
        <Route path="/info" element={<Info />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
