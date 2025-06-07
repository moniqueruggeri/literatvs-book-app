import "./CardFooter.sass";
import avatar from "../../assets/images/avatar.webp";

function CardFooter() {
  return (
    <>
      <div className="card-footer">
        <div className="card-footer-user">
          <img className="card-footer-user-img" src={avatar} alt="avatar" />
          <div className="card-footer-user-profile">
            <p className="card-footer-user-profile-name">Joana da Silva</p>
            <p className="card-footer-user-profile-historic">Lido há 2 dias</p>
          </div>
        </div>
        <div className="card-footer-icons">
          <div className="card-footer-icons-icon-favorite">
            <button className="card-footer-icons-icon material-symbols-outlined">
              favorite
            </button>
            <p>100</p>
          </div>
          <div className="card-footer-icons-icon-comment">
            <button className="card-footer-icons-icon material-symbols-outlined">
              comment
            </button>
            <p>100</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFooter;
