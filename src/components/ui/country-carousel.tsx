import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { countries } from "@/lib/countries";
import { FaDeaf } from "react-icons/fa";

export default function CountryCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-def">
      <Slider {...settings}>
        {countries.map((country, index) => (
          <div className="bg-red-200" key={index}>
            <div className="bg-zinc-100 w-12 mr-4">
            <h3>{country.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
