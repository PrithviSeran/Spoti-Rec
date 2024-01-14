import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import User from './components/home';
import Music from './components/music';
import Info from './components/info';
import ShowPlaylists from "./components/playlists_lists";

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
        <Route path="/music/playlists_lists" element={<ShowPlaylists/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;