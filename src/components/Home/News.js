import React,{useState,useEffect} from 'react';
import './News.css';
import Slider from "react-slick";
function News() {
    const[news,setNews]=useState([]);
    async function newsApi(){
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=250912650e7b4e3a99535f822f4b1943');
        const data = await response.json();
        setNews(data.articles);
        console.log(news)
    }
useEffect(()=>{
    newsApi();
},[]);
  return (
    <div className="news_container">
      <h2 className="news_heading"><span>Top </span>News</h2>
    <div className="grid">
        {news?news.slice(0,6).map((value)=>(
            <div class="grid-item">
              <img class="card-img" src={value.urlToImage} alt="Maldives" />
              <div class="card-content">
                <h3 class="card-header">{value.title.slice(0,50)+"..."}</h3>
                {/* <p class="card-text">
                    {value.content}
                </p> */}
                <a href={value.url} target="_blank">Read more</a>
              </div>
          </div>
        )):""}
    </div>
    </div>
  );
}

export default News;
