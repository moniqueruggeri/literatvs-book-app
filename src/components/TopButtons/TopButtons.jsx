import { Link } from "react-router-dom";
import "./TopButtons.sass";

const TopButtons = () => {
  const btn = [
    {
      icon: "star",
      text: "Novidades",
      className: "active",
      link: "/news",
    },
    {
      icon: "card_giftcard",
      text: "Cortesias",
      className: "",
      link: "/gifts",
    },
  ];
  return (
    <>
      {btn.map((btn) => (
        <Link to={btn.link} className="top-buttons-link">
          <div key={btn.text} className={`top-buttons ${btn.className}`}>
            <i className="material-symbols-outlined">{btn.icon}</i>
            <p>{btn.text}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopButtons;
