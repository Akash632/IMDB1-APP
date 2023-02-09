import React from "react";
import "./Footer.css";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="Footer_main">
      <div className="button">
        <button>Sign in for more access</button>
      </div>
      <div className="logos">
        <a
          href="https://www.tiktok.com/notfound"
          style={{ color: "white" }}
          target="_blank"
        >
          <EmojiEmotionsIcon />
        </a>
        <a
          href="https://www.instagram.com/imdb/"
          style={{ color: "white" }}
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/imdb"
          style={{ color: "white" }}
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/imdb"
          style={{ color: "white" }}
          target="_blank"
        >
          <YouTubeIcon />
        </a>
        <a
          href="https://www.facebook.com/imdb"
          style={{ color: "white" }}
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </div>
      <div className="footer_main">
              <a href="././home">Home</a>
              <a href="././NowPlaying">Now Playing</a>
              <a href="././Popular">Popular</a>
              <a href="https://apps.apple.com/us/app/id342792525?_branch_match_id=1147915344480287457&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9YP9k6pDDRzNDGxBABVqlN1IAAAAA%3D%3D&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot"
              target="_blank">Downloab App</a>
              <a href="https://help.imdb.com/imdb" target="_blank">Help</a>
              <a href="https://m.imdb.com/privacy?ref_=ft_pvc" target="_blank">Privacy Policy</a>
          {/* <div className="footer_content">
          <a>Downloab App</a>
            <a>Help</a>
            <a>Privacy Policy</a>
          </div> */}
      </div>
      <div className="amazon_logo">
        <p>an <span className="amazon">amazon</span> company</p>
      </div>
      <div className="copyrights">
        <div>
          <CopyrightIcon style={{ marginTop: 13, fontSize: 17 }} />
        </div>
        <div>
          <p> 1990-2023 by .com Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
