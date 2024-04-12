import React from "react";
import client1 from "../../../assets/images/client13.jpg";
import Image from "next/image";

const ReviewCard = ({ reviewData }: any) => {
  return (
    <div>
      <div
        id=""
        className="pb-5 pt-14 mt-16 bg-white border-4 border-double border-[#8EA283] text-center w-[80%] mx-auto rounded-full relative"
      >
        <Image
          src={reviewData.image_url}
          alt="Web_icon"
          height={100}
          width={100}
          className="h-[100px] min-w-[100px] rounded-full object-cover object-center mx-auto border-[5px] border-[#BFD8AF] border-dotted p-1 absolute -top-14 left-1/2 translate-x-[-50%] z-40"
        />

        <p className="text-primary w-10/12 mx-auto italic mb-2">
          {reviewData.description}
        </p>
        <h3 className="text-[#1A3B20] font-semibold italic">
          {reviewData.title}
        </h3>
        <h4 className="mt-1 text-sm">{reviewData.designation}</h4>
      </div>
    </div>
  );
};

export default ReviewCard;
