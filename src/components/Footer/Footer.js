import React from 'react';
import './Footer.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className="Footer_main">
      <div className="button">
        <button>
          Sign in for more access</button>
          </div>
          <div className="logos">
            <a href="https://www.tiktok.com/notfound" style={{color:"white"}} target="_blank">
              <EmojiEmotionsIcon/>
            </a>
            <a href="https://www.instagram.com/imdb/" style={{color:"white"}} target="_blank">
              <InstagramIcon/>
            </a>
            <a href="https://twitter.com/imdb" style={{color:"white"}} target="_blank">
              <TwitterIcon/>
            </a>
            <a href="https://www.youtube.com/imdb" style={{color:"white"}} target="_blank">
              <YouTubeIcon/>
            </a>
            <a href="https://www.facebook.com/imdb" style={{color:"white"}} target="_blank">
              <FacebookIcon/>
            </a>
          </div>
          <div className="footer_main">
          <div className="footer_body">
          <div className="footer_content">
            <a>Home</a>
            <a>Latest</a>
            <a>Mow Playing</a>
          </div>
          <hr/>
          <div className="footer_content">
          <a>Downloab App</a>
            <a>Help</a>
            <a>Privacy Policy</a>
          </div>
          </div>
          </div>
          <div className="amazon_logo">
            <p>amazon logo</p>
          </div>
          <div className="copyrights">
            <div>
             <CopyrightIcon style={{marginTop:13,fontSize:17}}/>  
            </div>
            <div>
            <p> 1990-2023 by imdb.com Inc</p>
            </div>
          </div>
    </div>
  );
}

export default Footer;
