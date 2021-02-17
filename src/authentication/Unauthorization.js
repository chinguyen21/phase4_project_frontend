
import React, {useState, useEffect} from 'react';
import News from '../components/News'

const Unauthorization = () => {
  const [allNews, setAllNews] = useState([])
  // useEffect(() =>{
  //   fetch("https://newsapi.org/v2/everything?q=fitness&apiKey=6506d673db3c4724b89c8306b2af7787")
  //   .then(res => res.json())
  //   .then(news => {
  //     setAllNews(news.articles)
  //   })
  // })

  return (
    <header className="App-page">
      <div className="welcome">Welcome to FlatTrackerPal</div>
        <br/>
      <div className="news">
      {allNews.map(news => <News news={news} />)}
      </div>
    </header>
  )
}

export default Unauthorization;