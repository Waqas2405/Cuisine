import React from 'react'
import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
const Cuisine = ({filterByArea}) => {

  const featuerdAreas = [

  
    'Canadian',
    'Chinese',
   'british',
    'Thai',
    'Russian',
    'Mexican',
    'Italian'
  ]

  return (
    <div className='bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20'>
      <div className='max-w-8xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide'>

        <div className='flex items-center space-x-3 py-3'>
          <div className='flex items-center text-lg text-amber-400 font-bold pr-3 whitespace-nowrap'>
            <Globe className='w-5 h-5 mr-2' />Global Cuisines:
          </div>
          {featuerdAreas.map((area) => (<Link to={`search/${area}`} onClick={() => filterByArea(area)} key={area} className='text-gray-200 py-2 px-4 font-medium text-sm cursor-pointer rounded-full whitespace-nowrap bg-gray-800 border-gray-900 hover:bg-blue-600 hover:border-blue-500 hover:text-shadow-mist-200 transaction  duration-200 hover:shadow-lg hover:shadow-gray-800/80 tranform hover:scale-[1.05]'>
            {area}
          </Link>))}
        </div>

      </div>


    </div>
  )
}

export default Cuisine