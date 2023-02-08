import React,{useState,useEffect} from 'react';
import './Reviews.css';
function Reviews(props) {
    const [reviewData,setReviewData]=useState([]);

    async function reviewApi(){
        const response=await fetch(`https://api.themoviedb.org/3/movie/${props.id}/reviews?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1`);
        const data=await response.json();
        setReviewData(data.results);
        // console.log(data.results);
        // console.log(reviewData.author);
        // console.log(reviewData);
    }
useEffect(()=>{
    reviewApi();
},[]);
  return (
    <div className="reviews">
        {reviewData.slice(0,2).map((reviewData)=>(
            <div>
                <p>{reviewData.author_details.username}</p>
                <p>{reviewData.author_details.rating}</p>
                <p>{reviewData.content}</p>
                <p>{reviewData.updated_at}</p>
            </div>
        ))}
    </div>
  );
}

export default Reviews;
