import React from 'react'
import Filter from '../Filter/Filter'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

const NavBar = ({getCountriesByName, getCountries, getCountriesByRegion}) => {
  return (
    <div className='NavBar'>
      {/* Search input */}
      <SearchBar getCountriesByName={getCountriesByName} getCountries={getCountries} getCountriesByRegion={getCountriesByRegion}/>

      {/* Filter */}
      <Filter getCountriesByRegion={getCountriesByRegion}/>
      
    </div>
  )
}

export default NavBar
