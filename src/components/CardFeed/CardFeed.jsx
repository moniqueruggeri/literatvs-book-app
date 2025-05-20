import "./CardFeed.sass";
import avatar from "../../assets//images/avatar.webp";

const CardFeed = () => {
  const books = [
    {
      image:
        "https://static.fnac-static.com/multimedia/Images/PT/NR/c5/c5/4d/5096901/1507-0.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "Amando essa leitura",
    },
    {
      image:
        "https://static.fnac-static.com/multimedia/Images/PT/NR/c5/c5/4d/5096901/1507-0.jpg",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "Amando essa leitura",
    },
  ];

  return (
    <div className="card-feed">
      {books.map((book) => (
        <div className="card-feed-book">
          <img src={book.image} alt={book.title} />
          <div className="card-feed-book-info">
            <div className="card-feed-book-info-title">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
            <p>{book.description}</p>
          </div>
          <button className="card-feed-book-add material-symbols-outlined">
            add
          </button>
        </div>
      ))}
      <div className="card-feed-book-comemnt">
        <div className="card-feed-book-comemnt-line">
          <img src={avatar} alt="avatar" />
          <div className="card-feed-book-profile-name">
          <p className="card-feed-book-profile-name-name">Joana da Silva</p>
          <p className="card-feed-book-profile-name-history">
            Lido há 2 dias
          </p>
        </div>
        </div>
        <div className="card-feed-book-comemnt-icons">
          <div className="card-feed-book-comemnt-icons-icon-favorite">
            <button className="card-feed-book-comemnt-icons-icon material-symbols-outlined">
              favorite
            </button>
            <p>100</p>
          </div>
          <div className="card-feed-book-comemnt-icons-icon-comment">
            <button className="card-feed-book-comemnt-icons-icon material-symbols-outlined">
              comment
            </button>
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeed;
