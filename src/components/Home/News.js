import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './News.css'

function News() {
    const [data, setData] = useState([]);
    
    async function newsData(){
        await axios.get(`https://newsdata.io/api/1/news?apikey=pub_1643021f1f98ab0d36d61d19e2e366a56ac0b&category=entertainment&language=en`)
        .then((response)=>{
            console.log(response.data);
            setData(response.data.results);
            console.log(data);
        })
    }
    useEffect(() => {
        newsData();
      } ,[]);
  return (
    <div className='card_page_news'>
        <h1 className='page_title_news'><span>Top</span> News</h1>
        <div className='cards_main_tv'>
        {data.slice(0,6).map((value)=>(
            <div className='news_card'>
                {value.image_url?<img src={value.image_url} className='news_image'/>:<img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" className='news_image'/>}
                <div className="news_description">
                <p>{value.title.slice(0,50)}
                <a href={value.link} className="news_link" target="_blank"> Read More </a>
                </p>
                  </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default News;
