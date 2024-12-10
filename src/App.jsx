
import './App.css'
import {useState} from "react";
import CardList from './components/CardList/CardList'
import Navbar from './components/Navbar/Navbar'
// import Home from "./components/Home/Home"

function App() {
const [isFav, setIsFav] = useState([])
const [showFav, setShowFav] = useState(false)

function handleLiked(card){
  if(!isFav.includes(card)){
    setIsFav((prev) => [...prev, card])
  }
}

  return (
    <>
      
      {/* <Home/> */}
      <Navbar onShowFav={() => setShowFav(true)} onShowAll={()=> setShowFav(false)} />
        {showFav? (
             <CardList data={isFav} onLike={handleLiked}/> 
        ):(<CardList onLike={handleLiked}/>)}
   
    </>
  )
}

export default App
