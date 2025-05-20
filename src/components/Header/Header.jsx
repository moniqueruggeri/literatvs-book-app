import avatar from "../../assets/images/Martina.webp";
import "./Header.sass";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-name">
          <p className="header-name__text">Olá,</p>
          <h3 className="header-name__title">Martina!</h3>
        </div>
        <div className="header-img">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
