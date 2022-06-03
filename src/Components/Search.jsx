import React, { useState } from "react"
import searchService from "../Services/searchService"
import { useStore } from "../state/store"
import Results from "./Results"

const Search = () => {
  const [search, setSearchFood] = useState("")

  const { setSearch, setErrors } = useStore()

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Service for the search of the meal
    const response = await searchService(search)
    setSearchFood("")
    // Handle errors

    if (response.status !== 200) {
      return setErrors(response.response.data.message)
    }

    // Storing in the global state
    if (response.status === 200) setSearch(response.data.foods[0])
  }

  return (
    <>
      <div className="container is-max-desktop">
        <div className="column is-four-fifths">
          <form onSubmit={handleSubmit}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Find your meal"
                  value={search}
                  onChange={(e) => setSearchFood(e.target.value)}
                  data-cy="search-bar"
                />
              </div>
              <div className="control">
                <button className="button is-info">Search</button>
              </div>
            </div>
          </form>
          {/* Results of the search */}
          <Results />
        </div>
      </div>
    </>
  )
}

export default Search
