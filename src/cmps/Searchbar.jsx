import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'

export const Searchbar = () => {

  const navigate = useNavigate()
  const searchRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  useEffect(() => {
    searchRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  

  
  return <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">

      <label htmlFor="search-field" className="sr-only">Search all songs</label>

      <div className="flex flex-row justify-start items-center">
        <FiSearch  className="w-5 h-5 ml-4"/>
        <input 
        type="search" 
        name="text-field" 
        autoComplete="off" 
        id="search-field" 
        placeholder="Search"
        ref={searchRef}
        onChange={(ev) => setSearchTerm(ev.target.value)}
        value={searchTerm} 
        className="flex-1 bg-transparent border-none outline-none 
        placeholder-gray-500 text-base text-white p-4" />
      </div>
    </form>
}
