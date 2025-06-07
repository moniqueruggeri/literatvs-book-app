import "./Layout.sass";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import TopButtons from "../components/TopButtons/TopButtons";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <SearchBar />
      <div className="top-buttons-container">
        <TopButtons />
      </div>
      <main>
        <Outlet />
      </main>
      <NavBar />
    </div>
  );
};

export default Layout;
