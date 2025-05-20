import './App.sass'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import TopButtons from './components/TopButtons/TopButtons'
import NavBar from './components/NavBar/NavBar'
import CardFeed from './components/CardFeed/CardFeed'
import './styles/styles.sass'

function App() {

  return (
    <>
      <Header />
      <SearchBar />
      <div className='top-buttons-container'>
      <TopButtons 
        icon='star'
        text='Novidades'
        className='active'
      />
      <TopButtons 
        icon='card_giftcard'
        text='Cortesias'
      />
      </div>
      <CardFeed />
      <NavBar />
    </>
  )
}

export default App
