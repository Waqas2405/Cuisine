import { Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategorySelection = ({filterByCategory}) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <>
      <section className="mt-2 mx-auto">
        {/* Heading scales down on small screens, matching the other homepage sections */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-100 mb-4 sm:mb-6 tracking-tight border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center">
          <Utensils className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500 shrink-0" />
          Quick Filter by Primary Ingredient
        </h2>
{/* Grid already scaled columns per breakpoint; kept as-is and just tightened
    gaps/padding slightly on the smallest phones so tiles don't feel cramped */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
  {featuredCategories.map((cat, index) => (
    <Link
      to={`search/${cat}`}
      key={index}
      onClick={() => filterByCategory(cat)}
      className="bg-gray-800 p-3 sm:p-4 md:p-5 rounded-xl shadow-xl shadow-black transition duration-300 text-center text-sm sm:text-base font-semibold text-gray-100 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transform hover:scale-[1.05] hover:bg-gray-700/50"
    >
      {cat}
    </Link>
  ))}
</div>
      </section>
    </>
  );
};

export default CategorySelection;