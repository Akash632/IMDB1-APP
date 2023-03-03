import React,{useState,useEffect} from 'react';
import './Cast.css'
export default function Cast(props) {
    const [data,setData]=useState([]);
    async function apiCall(){
        let response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=f799338db4bf5a2b20353812479cdaba&language=en-US`);
        let apidata = await response.json();
        setData(apidata.cast);
        console.log("cast data loading")
        console.log(apidata);
        console.log(data);
        console.log(data.cast);
    }
    useEffect(()=>{
        apiCall()
    },[props.id]);
    // data.map((value)=>{
    //     console.log(value.profile_path);
    // })
  return (
    <div>
        <h1 className='heading'>Cast</h1>
        <div className='cast-container'>
        {data?data.slice(0,8).map((value)=>(
            <div>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${value.profile_path}`}
                className="cast-image"
                />
                <p className='cast-name'>{value.name}</p>
        </div>
        )):<h1>No data found</h1>}
        </div>
    </div>
  );
}
