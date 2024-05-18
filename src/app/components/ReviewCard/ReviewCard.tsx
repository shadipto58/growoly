"use client"
import Image from "next/image";
import "./ReviewCard.css"
import { useTheme } from "next-themes";

const ReviewCard = ({ reviewData }: any) => {
  const { theme } = useTheme();
  return (
    <div
      id=""
      className={`pb-5 pt-14 z-50 mt-16 bg-white dark:bg-[#1B4242] ${theme == "light"? "":"boxglow"} cursor-grab border-4 border-double border-[#8EA283] text-center w-[80%] mx-auto rounded-full relative`}
    >
      <Image
        src={reviewData.image_url}
        alt="Web_icon"
        height={100}
        width={100}
        className="h-[100px] min-w-[100px] rounded-full object-cover object-center mx-auto border-[5px] border-[#BFD8AF] border-dotted p-1 absolute -top-14 left-1/2 translate-x-[-50%] z-40"
      />

      <p className="text-primary dark:text-gray-200 w-10/12 mx-auto italic mb-2">
        {reviewData.description}
      </p>
      <h3 className="text-[#1A3B20] dark:text-[#78b64f] font-semibold italic">
        {reviewData.title}
      </h3>
      <h4 className="mt-1 text-sm dark:text-stone-50">
        {reviewData.designation}
      </h4>
    </div>
  );
};

export default ReviewCard;
