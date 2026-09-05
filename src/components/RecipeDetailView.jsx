import React from 'react'
import { useParams } from 'react-router-dom'
import { UserFetch, API_URL } from './UserFetch'
import { Loader, MailMinus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Utensils } from 'lucide-react'
import { BookOpen } from 'lucide-react'




const RecipeDetailView = (title) => {
  const { id } = useParams();
  const { data, Eroor, loading } = UserFetch(`${API_URL}lookup.php?i=${id}`);
  console.log(data);
  const meal = data?.meals?.[0];

  if (loading) return (
    <div className="text-center p-8 text-gray-300">
      <Loader className="animate-spin inline-block mr-2 text-blue-400" />

    </div>
  );


  const ingrediants = [];

  for (let i = 1; i <= 20; i++) {
    const ingrediant = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingrediant && ingrediant.trim()) {
      ingrediants.push({
        ingrediant: ingrediant.trim(),
        measure: measure ? measure.trim() : "",
      });
    }


  }
  console.log(ingrediants);



  const instructions = meal.strInstructions ? meal.strInstructions.split(".").map((step) => step.trim()).filter((step) => step.length > 0) : [];



  return (

    <>
      <main className='max-w-8xl mx-auto px-4 lg:px-8 sm:px-6 py-4'>
        <Link to={'/'} className='text-amber-500 flex hover:text-amber-300 mb items-center text-lg font-medium transition group'>
          <ChevronLeft className='w-6 h-5 mr-1 transition' />
          Back to Dashboard
        </Link>

        <div className='bg-gray-900 p-6 md:p-12 border-gray-700 rounded-2xl shadow-3xl shadow-black/50 border '>

          <div className='lg:flex lg:space-x-12'>

            <div className='lg:w-1/2  mb-8 lg:mb-0'>

              <h1 className='text-4xl mb-6 text-gray-100 font-black leading-tight'>
                {meal?.strMeal}
              </h1>
              <img src={meal?.strMealThumb} alt="" className='w-[400px] h-[400px] rounded-xl shadow-2xl shadow-black/50 border-4 border-gray-800  ring-2 ring-blue-500/50 mx-5  hover:border-gray-300 hover:ring-blue-300 transition duration-500' />
            </div>

            <div className='lg:w-1/2 rounded-2xl shadow-inner  border-gray-800 border pb-4 bg-gray-600 shadow-black/30'>

              <h1 className='text-amber-400 font-bold text-4xl flex items-center mb-4 border-b border-gray-700 pb-3 mt-2 ml-2'>
                <Utensils className='w-8 h-8 mr-3 text-blue-800' />
                Key Ingrediants
              </h1>

              <ul className='grid grid-cols-1 sm:grid-cols-2 p-0 gap-x-6 gap-y-4 list-none mr-2'>

                {ingrediants.map((item, index) =>
                (
                  <li key={index} className=' text-gray-200 ml-3 text-base flex items-start'>
                    <span className='text-amber-300 font-extrabold text=lg mb-2.5 mr-0.5'>{">"}</span>
                    <span className='text-blue-300 font-semibold mr-2 '>{item.measure}</span>
                    {item.ingrediant}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4 border-t border-gray-700">
                <div className="text-lg text-gray-400 space-x-3 flex flex-wrap gap-y-2">

                  <span className="bg-blue-600 text-white ml-3 px-4 py-1.5 rounded-full 
                    font-semibold text-sm shadow-md">
                    {meal.strCategory}
                  </span>

                  <span className="bg-green-600 text-white ml-3 px-4 py-1.5 rounded-full 
                    font-semibold text-sm shadow-md">{meal.strArea}</span>

                </div>

              </div>


            </div>
          </div>
           <div className="mt-14 pt-8 border-t border-gray-800">
            <h2 className="text-3xl font-bold text-gray-100 mb-8 flex items-center">
              {" "}
              <BookOpen className="w-7 h-7 mr-3 text-blue-500" /> Detailed Preparation Steps
            </h2>
            <ol className="space-y-6 list-none text-gray-300">
              {instructions.map((step, index) => (
                <li key={index} className="text-lg leading-relaxed bg-gray-800 p-5 rounded-xl border-l-6 border-blue-500 shadow-lg shadow-black-30 transition duration-300 hover:bg-gray-700/50">
                  <span className="font-extrabold text-yellow-400 mr-3 text-xl">{index + 1}</span>
                  {step.trim()}
                </li>
              ))}
            </ol>
          </div>

          



        </div>
        

      </main>
    </>
  )
}

export default RecipeDetailView
