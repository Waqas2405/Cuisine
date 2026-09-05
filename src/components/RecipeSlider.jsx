import React from 'react';
import RecipeCard from './RecipeCard'; 
import { UserFetch } from './UserFetch';
import Slider from "react-slick";
import {Loader,Clock} from 'lucide-react';

// Resolves Vite CommonJS import object for react-slick
const SlickSlider = Slider.default || Slider;

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data,loading,Eroor } = UserFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // default (desktop, >=1024px)
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // Responsive breakpoints so the carousel shows fewer cards as the
    // screen gets narrower, instead of squeezing 3 cards onto a phone.
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640, // phones
        settings: { slidesToShow: 1 }
      }
    ]
  };
  if (loading) return (
    <div className="text-center p-8 text-gray-300">
      <Loader className="animate-spin inline-block mr-2 text-blue-400" />
      Loading {title}...
    </div>
  );

  return (
    <section className="mt-2 mx-auto">
      {/* Heading scales down on small screens so it never wraps awkwardly on narrow phones */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-100 mb-4 sm:mb-6 tracking-tight border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500 shrink-0" />
        {title}
      </h2>

      {/* Replaced the fixed inline width/padding with responsive Tailwind classes so the
          slider track widens/narrows cleanly at each breakpoint. overflow-hidden guards
          against any horizontal scroll caused by the slider's internal negative margins. */}
      <div className="w-full sm:w-[92%] md:w-[90%] mx-auto px-1 sm:px-2 overflow-hidden">
        <SlickSlider {...settings}>
          {meals.map((meal) => (
            // Slide gutter shrinks on small screens (px-2) and grows on larger ones (lg:px-10)
            <div key={meal.idMeal} className="px-2 sm:px-4 md:px-6 lg:px-10 flex justify-center">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default RecipeSlider;