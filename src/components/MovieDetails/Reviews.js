import React, { useState, useEffect } from "react";
import "./Reviews.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GradeIcon from "@mui/icons-material/Grade";

function Reviews(props) {
  const [reviewData, setReviewData] = useState([]);

  async function reviewApi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${props.id}/reviews?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1`
    );
    const data = await response.json();
    setReviewData(data.results);
    // console.log(data.results);
    // console.log(reviewData.author);
    // console.log(reviewData);
  }
  useEffect(() => {
    reviewApi();
  }, []);
  return (
    <div className="review-body">
      <h1>Reviews</h1>
      <div className="review">
        {reviewData.slice(0, 2).map((reviewData) => (
          <div className="review-container">
            <div className="user-section">
              <AccountCircleIcon
                style={{ marginTop: 10, marginRight: 10, fontSize: 35 }}
              />
              <p>{reviewData.author_details.username}</p>
              <div className="rating-section">
              <p>{reviewData.author_details.rating}</p>
              <GradeIcon style={{marginTop: 17,fontSize: 20}}/>
            </div>
            </div>
            <p>{reviewData.content.slice(0, 500)}
            <a href={reviewData.url} target="_blank" className="read-more">Read More</a>
            </p>
            <p>{reviewData.updated_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
