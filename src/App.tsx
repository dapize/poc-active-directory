import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Private from "./routes/Private";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
