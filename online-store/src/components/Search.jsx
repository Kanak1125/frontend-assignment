import {useState} from 'react'
import Navbar from './Navbar';
import { useQuery } from '@tanstack/react-query'

const Search = () => {
    const [searchItem, setSearchItem] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);  // to check if the form is submitted...

    const fetchData = () =>
    // filtering algorithm for search...
    fetch(`https://fakestoreapi.com/products?title=${searchItem}`)
        .then(res => res.json())
        .then(data => data.filter(item  => (
            item.title.toLowerCase().includes(searchItem.toLowerCase())) 
            || 
            (item.category.toLowerCase().includes(searchItem.toLowerCase()))
    ))
        
    const {isLoading, error} = useQuery(['search', searchItem], fetchData ,
        {
            refetchInterval: 500    // setting refetchInterval from API to 500ms
        }
    )


        if (isLoading) return (
            <div className="d-flex align-items-center mx-auto my-5 container">
                <strong>Loading...</strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    
        if (error) return <h2>An error has occurred: {error.message}</h2>
    // console.log(data);
    

    function handleSearch(e) {
        setSearchItem(e.target.value);
    }

  return (
    <>
        <Navbar 
            hasSubmitted={hasSubmitted}
            setHasSubmitted={setHasSubmitted}
            searchTerm={searchItem}
            handleSearch={handleSearch}
        />
    </>
  )
}

export default Search