import React from 'react'
import {useState} from 'react';
import { useQuery } from '@tanstack/react-query'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Main from './Main';

const Home = () => {
    const [searchItem, setSearchItem] = useState('');
    const [data, setData] = useState([]);
    // const [menClothingData, setMenClothingData] = useState([]);

    // useEffect(() => {
    //     setMenClothingData(data.filter(d => d.category === "men's clothing"));
    // }, [data])
    function handleSearch(e) {
      setSearchItem(e.target.value);
    }

    const {isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            fetch(`https://fakestoreapi.com/products/`).then(res => res.json())
            .then(data => {
                setData(data)
            });
            return data;
        }
    }) 
    // console.log(categories)

    // const router = createBrowserRouter([
    //   // {
    //   //   path: "/",
    //   //   element: <Root />,
    //   // },
    //   {
    //     path: "/productDetails",
    //     element: <ProductDetails />,
    //   },
    // ]);

    if (isLoading) return (
        <div className="d-flex align-items-center mx-auto my-5 container">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )

    if (error) return <h2>An error has occurred: {error.message}</h2>

    console.log(data);

  return (
    <>
        <Navbar 
        searchItem={searchItem}
        handleSearch={handleSearch}
        />
        <Carousel />
        <Main 
        data={data}
        // router={router}
        />
    </>
  )
}

export default Home