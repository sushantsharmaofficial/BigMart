import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

function HeroSection() {
  const slides = [
    {
      url: "https://png.pngtree.com/background/20211215/original/pngtree-clothing-store-casual-fashion-mens-photography-photos-with-pictures-picture-image_1485287.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      url: "https://image.cnbcfm.com/api/v1/image/106963490-1634759952978-gettyimages-1308615771-dsc05921.jpeg?v=1634760396&w=1920&h=1080",
    },
    {
      url: "https://cdn.gobankingrates.com/wp-content/uploads/2022/12/arabic-couple-grocery-shopping-supermarket_iStock-1432784373.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFIrstIndex = currentIndex === 0;
    const newIndex = isFIrstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const nextIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className=" flex h-[70vh] mb-10 mx-10 mt-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" w-full h-full  bg-center bg-contain rounded-2xl duration-200"
      >
        {/* left arrow  */}
        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-2 bg-orange-400/60 shadow-2xl text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right  arrow  */}
        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 bg-orange-400/60 shadow-2xl text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className=" flex  items-center  justify-center my-[71vh]">
          {slides.map((image, imageIndex) => (
            <div
              key={imageIndex}
              onClick={() => goToSlide(imageIndex)}
              className={
                currentIndex === imageIndex
                  ? `text-3xl text-orange-400 cursor-pointer`
                  : ` text-xl text-black`
              }
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
