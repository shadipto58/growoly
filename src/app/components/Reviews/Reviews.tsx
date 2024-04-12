"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewList from "@/assets/slideData.json";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear"
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="flex items-center gap-5 justify-center mb-6">
          <svg
            viewBox="-2.4 -2.4 28.80 28.80"
            width="75"
            height="75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <path
                transform="translate(-2.4, -2.4), scale(0.8999999999999999)"
                d="M16,30.996731773018837C19.000557400176444,30.713630396570963,20.917586199688174,27.894669527032672,23.31486919208192,26.06805370659314C25.64055851769215,24.295988861071873,29.618025903533997,23.40158934357524,29.79806340656598,20.4832625706638C29.989865970054044,17.37422947081666,24.985811869914695,16.354535152795883,24.098318295344882,13.368696879479154C23.166256438763163,10.232915343450218,27.049756292570905,6.242065857611824,24.846365636754427,3.82402227569375C22.804808649548306,1.5835780961733024,18.809345947065538,3.3434119618280866,16,4.4814455304294825C13.827043545454666,5.361685071937246,13.240847271673006,8.249565737591732,11.1767834861148,9.361411991770407C8.523124142386841,10.790854832555604,4.490037676885958,9.269669814341391,2.6619833351955666,11.666215676922299C0.878322143854078,14.004562929992936,1.9805977978681433,17.46309154664608,2.8550494729545193,20.271053332244197C3.738291178509887,23.10724088531967,5.306895609767,25.67196379053355,7.608473168996113,27.549945815342504C10.010205919233984,29.509649895378985,12.913905496156909,31.2879035405827,16,30.996731773018837"
                fill="#BFD8AF"
                strokeWidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.096"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.61 14.84C11.61 15.93 10.76 16.78 9.67 16.78H8.19C7.12 16.78 6.25 15.91 6.25 14.84V12.17C6.25 9.09 6.92 8.4 8.71 7.34C8.83 7.27 8.96 7.24 9.09 7.24C9.35 7.24 9.6 7.37 9.74 7.61C9.95 7.97 9.83 8.43 9.48 8.64C8.27 9.34 7.85 9.6 7.77 11.41H9.68C10.77 11.41 11.62 12.26 11.62 13.35V14.84H11.61ZM17.75 14.84C17.75 15.93 16.9 16.78 15.81 16.78H14.32C13.25 16.78 12.38 15.91 12.38 14.84V12.17C12.38 9.09 13.05 8.4 14.84 7.34C14.96 7.27 15.09 7.24 15.22 7.24C15.48 7.24 15.73 7.37 15.87 7.61C16.08 7.97 15.96 8.43 15.61 8.64C14.4 9.36 13.98 9.62 13.9 11.43H15.81C16.9 11.43 17.75 12.28 17.75 13.37V14.84Z"
                fill="#292D32"
              ></path>
            </g>
          </svg>
          <h2 className="max-w-lg text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            Whats our clients says
          </h2>
        </div>
      </div>
      <div id="">
        <div className="">
          <Slider {...settings}>
            {ReviewList.map((review, index) => (
              <ReviewCard key={review.id} reviewData={review}/>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
