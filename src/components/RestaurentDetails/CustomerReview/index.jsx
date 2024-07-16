import { IoIosArrowBack } from "react-icons/io";
import customerReviewData from "../../../constants/customerReview.constant";
import ReviewCard from "./ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const CustomerReview = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slickPrev: ".previous",
  };
  return (
    <section className="bg-[#D9D9D9] font-poppins pt-24 pb-32 mb-32 px-10">
      {/* Heading */}
      <div className="flex flex-row items-center justify-between">
        {/* left */}
        <h1 className="text-black text-[44px] font-bold">Customer Reviews</h1>
        {/* right */}
        <div className=" flex flex-row gap-2">
          <button
            onClick={previous}
            className="  bg-orange p-4 rounded-full previous"
          >
            <IoIosArrowBack className="text-2xl " />
          </button>
          <button
            onClick={next}
            className="rotate-180 bg-orange p-4 rounded-full"
          >
            <IoIosArrowBack className="text-2xl next" />
          </button>
        </div>
      </div>
      {/* slider container */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className=" -translate-x-5 mt-9"
      >
        {/* slider card 1 */}
        {customerReviewData?.map((review) => (
          <div className="bg-[#D9D9D9]  pl-5" key={review?.id}>
            <ReviewCard />
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default CustomerReview;
