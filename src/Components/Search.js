import React, { useState } from 'react'
import searchService from '../Services/searchService'
import Results from './Results'

const Search = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Service for the search of the meal
    const response = await searchService(search)

    if (response) setResults(response.foods)

  }

  return (
    <>
      <div className="container is-max-desktop">
        <div>Search</div>

        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">

              <input className="input" type="text" placeholder="Find your meal" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="control">
              <button className="button is-info">
                Search
              </button>
            </div>

          </div>
        </form>
        {/* Results of the search */}
        <Results data={results} />
      </div>


    </>
  )
}

export default Search