import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PlayerList />} path="/players/list" default />
          <Route element={<PlayerForm />} path="/players/addplayer" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
