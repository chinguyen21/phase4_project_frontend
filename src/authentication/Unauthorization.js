
import React, {useState, useEffect} from 'react';
// import { Route } from 'react-router-dom';
import News from './News'
// import FullArticle from './FullArticle'




const Unauthorization = () => {
  
  const [allNews, setAllNews] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then(news => {
      setAllNews(news)
    })
  },[])


  return (
    <header className="App-page">
      <h1 className="news-header">Welcome to FlatTrackerPal</h1>
      <div className="container-news">
        {/* {console.log(allNews)} */}
      {allNews.map(news => {
        return <News key={news.id} news={news} />
      }) 
      }

      </div>

    </header>
  )
}

export default Unauthorization;