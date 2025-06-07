import "./App.sass";
import "./styles/styles.sass";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import BookShelf from "./pages/BookShelf/BookShelf";
import Menu from "./pages/Menu/Menu";
import Gifts from "./pages/Gifts/Gifts";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/bookshelf" element={<BookShelf/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/news" element={<News />} />
        </Route>
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
