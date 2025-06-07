import CardFeed from "../../components/CardFeed/CardFeed";
import "./Home.sass"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <CardFeed />
      </div>
    </div>
  );
}

export default Home;
