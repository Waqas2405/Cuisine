import React from 'react'
import TrendingRecipe from './TrendingRecipe'
import CategorySelection from './CategorySelection'
import RecipeSlider from './RecipeSlider'
import { UserFetch } from './UserFetch'
import { API_URL } from './UserFetch'
const Home = ({filterByCategory}) => {
  return (
    <>
    {/* Responsive page container: constrains width on large screens and scales side padding
        up smoothly from phones (px-4) -> tablets (sm:px-6) -> desktops (lg:px-8).
        Fixed the previous invalid classes ("mx-w-8xl", "lg-8x") which were doing nothing. */}
    <main className='max-w-8xl px-4 mx-auto sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>

      {/* Responsive vertical rhythm between homepage sections:
          tighter spacing on mobile, more breathing room on larger screens */}
      <div className='space-y-8 sm:space-y-10 lg:space-y-12'>

        <RecipeSlider title="Staff Curated Picks"  fetchUrl={`${API_URL}search.php?f=a`}/>

        <TrendingRecipe title="Quick and easy meal" fetchUrl={`${API_URL}filter.php?a=Canada`}/>

        <CategorySelection filterByCategory={filterByCategory} />

      </div>

    </main>
    
    </>
  )
}

export default Home 
