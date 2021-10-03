import React from "react"
import { useGlobalContext } from "./context"
const SearchForm = () => {
  const { query, setQuery, error, handleSearch } = useGlobalContext()
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}

export default SearchForm
