import React,{useState,useEffect} from 'react';
import CardClass from '../../CardClass';
import '../../CardList.css';
import { Navigate,useNavigate } from "react-router-dom";
import Error from '../../Error';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function LatestHome() {
  const navigate=useNavigate();
    const[time,setTime]=useState("day");
    const[category,setCategory]=useState("movie");
    const[data,setData]=useState([]);
    const [page, setPage] = useState(1);
    // console.log(time);
    // console.log(category);

    async function apiCall(){
        let response = await fetch(`https://api.themoviedb.org/3/trending/${category}/${time}?api_key=9b48421e56beff9d0381692f8b0ee7d7`);
        let data = await response.json();
        setData(data.results);
        // console.log(data);
    }
    useEffect(()=>{
        apiCall();
    },[time,category,page]);
  return (
    <div>
      <div className="section_section">
      <h1 className="page_title" onClick={()=>navigate('/NowPlaying')}><span>Now </span>Playing</h1>
      <div className="section_toggle">
        <select className="select_bar" onChange={(e)=>setTime(e.target.value)}>
            <option>day</option>
            <option>week</option>
        </select>
        <select className="select_bar" onChange={(e)=>setCategory(e.target.value)}>
          <option>all</option>
            <option>movie</option>
            <option>tv</option>
        </select>
        </div>
      </div>
      <div className="card_page">
      <div className="cards_main">
        {data.slice(0,8).map((movie) => (
          <CardClass
          id={movie.id}
          moviepath={movie.poster_path}
          moviename={movie.original_title}
          moviedescription={movie.overview}
        />
        ))}
      </div>
    </div>
    </div>
  );
}
