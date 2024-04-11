import { Link } from 'react-router-dom'
import "./styles/Navbar.css"
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { moviesGlobal } = useSelector(state => state);
  const input = useRef();

  const handleChangeInput = () => {
    const searchTerm = input.current.value.toLowerCase().trim();
    setInputValue(searchTerm);
    const results = moviesGlobal.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar scroll</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Adventure</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Link</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" ref={input} onChange={handleChangeInput} type="search" placeholder="Search" aria-label="Search"/>
          </form>
          {inputValue && searchResults.length > 0 && (
            <ul className='search-results'>
              {searchResults.map(movie => (
                <li className='search_list' key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
