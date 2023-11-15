import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import AverageRating from './components/AverageRating'
import Reviews from './components/Reviews'
import SentimentAnalysis from './components/SentimentAnalysis'
import WebsiteVisitors from './components/WebsiteVisitors'
import "./style.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid-container">
    <Sidebar />
    <AverageRating averageRating="4.6"/>
    <Reviews reviews="1,281"/>
    <SentimentAnalysis sentimentAnalysis="960"/>
    <WebsiteVisitors websiteVisitors="821"/>
</div>
)
}

export default App;
