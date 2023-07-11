import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import './MainContent.css'

const MainContent = ({countries}) => {
  return (
    <main>
      {/* Cards */}
      {
        !countries.length > 0 ? "No Countries Available!" : countries.map((country, i) => (
          <CountryCard key={i} {...country}/>
        ))
      }

    </main>
  )
}

export default MainContent
