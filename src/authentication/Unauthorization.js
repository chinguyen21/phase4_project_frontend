
import React, {useState, useEffect} from 'react';
import News from './News'



const Unauthorization = () => {
  const [allNews, setAllNews] = useState([])
  useEffect(() =>{
    fetch("https://newsapi.org/v2/everything?q=fitness&apiKey=6506d673db3c4724b89c8306b2af7787")
    .then(res => res.json())
    .then(news => {
      setAllNews(news.articles)
    })
  })



  return (
    <header className="App-page">
      <h1 className="news-header">Welcome to FlatTrackerPal</h1>
      <div className="container-news">
      {allNews.map(news => <News key={news.id} news={news} />)}
      </div>
    </header>
  )
}

export default Unauthorization;