import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const {searchItem, handleSearch, setHasSubmitted} = props;
    const navigate = useNavigate();

    function displayResults(e) {
        e.preventDefault();
        setHasSubmitted(false);
        navigate(`/search?item=${searchItem}`)
    }
  return (
    <nav className="nav w-100">
        <div className="container mx-auto d-flex flex-column flex-lg-row align-items-center justify-content-between py-3 gap-3">
            <a className="navbar-brand text-white fs-3 fw-semibold" href="#">Online Store</a>
            <form className="d-flex" role="search" onSubmit={displayResults}>
                <input
                 className="form-control me-2"
                 type="search" 
                 value={searchItem}
                 placeholder="Search" 
                 aria-label="Search" 
                 onChange={(e) => handleSearch(e)}
                />
                <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default Navbar

{/* <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container mx-auto d-flex justify-content-between">
            <a className="navbar-brand text-white" href="#">Online Store</a>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav> */}