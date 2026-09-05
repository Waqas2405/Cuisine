import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
    
    <div
      className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

      {/* Image size steps up per breakpoint instead of a fixed 240px (h-60/w-60),
          which overflowed narrow card widths on small phones */}
      <div className="flex justify-center items-center p-3 sm:p-4 lg:p-5">
        <img
          src={meal?.strMealThumb}
          alt=""
          className="h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-2 text-center">
        {/* Title text scales down slightly on mobile so long recipe names wrap cleanly */}
        <h3 className="text-base sm:text-lg lg:text-xl pb-2 sm:pb-3 font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition duration-300">
          {meal.strMeal}
        </h3>
      </div>
    </div>
   </Link>
  );
};

export default RecipeCard;
