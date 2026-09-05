import React from 'react';
import { UserFetch } from './UserFetch';
import Slider from "react-slick";
import { Loader, Clock, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';


// Resolves Vite CommonJS import object for react-slick
const SlickSlider = Slider.default || Slider;

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, Eroor } = UserFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 6, // default (large desktop, >=1280px)
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // Step the number of visible thumbnails down as the viewport shrinks,
    // so thumbnails stay a readable, tappable size on tablets and phones.
    responsive: [
      {
        breakpoint: 1280, // small desktop / laptop
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 1024, // tablets (landscape)
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768, // tablets (portrait)
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640, // phones
        settings: { slidesToShow: 2 }
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
        {/* Heading scales down on small screens, matching the other homepage sections */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-100 mb-4 sm:mb-6 tracking-tight border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500 shrink-0" />
          {title}
        </h2>

        {/* overflow-hidden prevents the slider track from causing horizontal page scroll on mobile */}
        <div className='mx-auto w-full overflow-hidden'>
          <SlickSlider {...settings}>
            {meals.map((meal) => (
              // Slide gutter shrinks on small screens, grows back up on larger ones
              <div key={meal.idMeal} className="px-2 sm:px-4 md:px-6 lg:px-10 flex justify-center">

<Link to={`/recipe/${meal.idMeal}`}>
                <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

                  <div className="flex justify-center items-center p-3 sm:p-4 lg:p-5">
                    {/* Thumbnail size steps up with screen size instead of a fixed 120px,
                        which was oversized relative to narrow phone screens */}
                    <img
                      src={meal?.strMealThumb}
                      alt=""
                      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-[120px] lg:w-[120px] rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                </div>
</Link>
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>
    
  );
};

export default TrendingRecipe;