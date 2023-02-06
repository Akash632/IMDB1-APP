import React, { useState, useEffect } from "react";
import "./Videos.css";
function Videos(props) {
  const [video, setVideo] = useState([]);

  async function getVideo() {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US`
    );
    const data = await response.json();
    setVideo(data.results);
    // console.log(data);
    // console.log(video);
    video.map((videodata) => console.log(videodata.name));
  }
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="video_main_section">
      <h1>Trailer</h1>
      <div className="video_section">
      {video.slice(0,2).map((videodata) => (
        <div className="video_card_container">
          <iframe
            width="510"
            height="280"
            src={`https://www.youtube.com/embed/${videodata.key}?modestbranding=1&;showinfo=0&;autohide=1&;rel=0;`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; gyroscope; web-share"
            allowFullScreen
            style={{borderRadius:10}}
          ></iframe>
          {/* <p>{videodata.name}</p> */}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Videos;
