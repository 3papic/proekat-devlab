import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,// telefon
    src: "https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=1800&t=st=1696600781~exp=1696601381~hmac=689642096ba57f41a7efff50f06161cf8c594b52d246105762ee4f2a2a85cdcd",
    headline: "Welcome to our store!",
    body: "Discover a world of quality products and exceptional deals.",
    cta: "Shop now",
    category: "all",
  },
 
  {
    id: 2, //dvoje ljudi na sliku 
    src: "https://img.freepik.com/free-photo/abstract-vaporwave-portrait-man-woman_23-2148950783.jpg?w=1800&t=st=1696601994~exp=1696602594~hmac=3d8a08b2eabda85bdab95df679f33a2da3e3136493d716072ce43f84af522e84",
    headline: "Explore our wide range of products",
    body: "From fashion to electronics, we have something for everyone.",
    cta: "Shop now",
    category: "smartwatch",
  },
  {
    id: 3, // dron
    src: "https://img.freepik.com/free-photo/white-drone-hovering-bright-blue-sky_158595-3344.jpg?w=1800&t=st=1696602058~exp=1696602658~hmac=ffd99631002186c89b5786993c10036d602aa1c105d9de6e6872ac340402ad4f",
    headline: "The best online shop - Everything you need",
    body: "Find top-quality products and convenience all in one place.",
    cta: "Shop now",
    category: "graphics card",
  },
  {
    id: 4, //camre
    src: "https://img.freepik.com/free-photo/high-angle-shot-lens-headphones-gimbal-phone_181624-43878.jpg?w=1800&t=st=1696602146~exp=1696602746~hmac=fd9df694378b28dbcdff7093a527b6187cf2f79f3197eb7c637a1a5eacec551d",
    headline: "Quality products at the best prices",
    body: "Elevate your audio experience with our selection of earbuds and headphones. Choose from the latest models and top brands, with noise-cancelling and wireless options for a customized listening experience.",
    cta: "Shop now",
    category: "earbuds",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-[50%] w-screen ">
        <div className="flex  justify-between pr-5 pl-1 gap-10 ">
          <button
            onClick={prevSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-7"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-5"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
