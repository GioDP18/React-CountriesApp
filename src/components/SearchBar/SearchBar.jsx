import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

const SearchBar = ({getCountriesByName, getCountries}) => {
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    // getCountries.forEach(element => {
    //   console.log(element)
    //   e.preventDefault();
    //   if(text == ""){
    //     getCountries()
    //   }
    //   else if(text != element){
    //       alert("No Result!")
    //   }
    //   else{
    //     getCountriesByName(text)
    //   }
    // });

    if(text == ""){
      getCountries()
    }
    else{
      getCountriesByName(text)
    }
  }

  return (
    <div className='SearchBar'>
      <FaSearch size={25} color="black"/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search"/>
      </form>
    </div>
  )
}

export default SearchBar
