import React from 'react';
// import LatestCarousal from './LatestCarousal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Data() {
    const imgArr =[
        {
          image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
          text:"Groceries"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
          text:"Fashion"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
          text:"Electronics"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
          text:"Home"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
          text:"Applications"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
          text:"Travel"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
          text:"Top Offers"
        },
        {
          image:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
          text:"Toys"
        },
        {
          image:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
          text:"Two Wheelers"
        }
      ]
  return (
    <div>
      {imgArr.map((value)=>(<LatestCarousal/>))}
    </div>
  );
}
