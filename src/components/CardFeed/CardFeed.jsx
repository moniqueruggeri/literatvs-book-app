import "./CardFeed.sass";
import CardFooter from "../CardFooter/CardFooter";

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
        "https://cdn.kobo.com/book-images/cf98f47f-f9ed-4f28-bfb8-7c86d715c6ba/1200/1200/False/novembro-9.jpg",
      title: "November 9",
      author: "Colleen Hoover",
      description: "QQ TA CONTECENO?",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995738i/210623672.jpg",
      title: "Nem te conto",
      author: "Emily Henry",
      description: "Amaaaando!",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51e2D9AGm9L._SY200_QL15_.jpg",
      title: "The Play - Briar U #3",
      author: "Elle Kennedy",
      description: "Meu casal!",
    },
  ];

  return (
    <>
      {/* colocar isso dentro de uma lista */}
      <ul className="card-feed">
        {books.map((book, index) => (
          <li key={index} className="card-feed-book">
            <div className="card-feed-book-container">
              <img className="card-feed-book-img" src={book.image} alt={book.title} />
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
            <CardFooter />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardFeed;
