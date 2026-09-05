import React, { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Cuisine from './components/Cuisine'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import RecipeDetailView from './components/RecipeDetailView'
import SearchView from './components/SearchView'

const API_URL = "https://www.themealdb.com/api/json/v1/1/";






function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(true);
  
  
  const filterRecipe = useCallback(async (query, filterType) => {

    setSearchLoading(true);

    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  //filter by Area
  const filterByArea=useCallback((area)=>{
    filterRecipe(area,"a")
  },[filterRecipe]);

  //filter by Category
  const filterByCategory=useCallback((category)=>{
    filterRecipe(category,"c")
  },[filterRecipe]);
  

  const handleSearch = useCallback(async (query) => {
    setSearchResult([]);
    setSearchLoading(true);

    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);
  return (
    <>
      <Router>
        <div className='min-h-screen bg-gray-950 text-gray-100 font-sans'>


          <Navbar handleSearch={handleSearch} />
          <Cuisine filterByArea={filterByArea} />
          <Routes>
            <Route path="/" element={<Home filterByCategory={filterByCategory} />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route path="/search/:query" element={<SearchView meals={searchResult} loading={searchLoading} />} />
          </Routes>
        </div>
      </Router>



    </>
  )
}

export default App