import { useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { useQuery } from '@tanstack/react-query'

const ProductDetails = () => {
    const { id } = useParams(); // to retrieve and use the product ID from the 'params'...

    const {isLoading, error, data} = useQuery({
        queryKey: ["products"],
        queryFn: () => 
            fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    })

    const [quantity, setQuantity] = useState(0);

    function incrementQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function decrementQuantity() {
        if (quantity === 0) return; 
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    function handleQuantity(e) {
        const value = e.target.value;
        const parsedValue = parseInt(value); // the value we get from the input field is string so parsing to INTEGER type...

        setQuantity(!isNaN(parsedValue) ? parsedValue : value);
    }
    
    // console.log(data);

    if (isLoading) return (
        <div className="d-flex align-items-center mx-auto my-5 container">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )

    if (error) return <h2>An error has occurred: {error.message}</h2>

  return (
    <>
        <Navbar />
        <div className="container d-flex flex-sm-row flex-column my-4 py-4">
            <img src= {data.image} className="img-thumbnail mx-2" alt="..." />
            <div className="details-container mx-5">
                <p className="title text-warning fs-3 fw-semibold">{data.title}</p>
                <div className="price">{data.description}</div>
                <div className="price">${data.price}</div>
                <div className="quantity d-flex">
                    <button className="btn btn-outline-dark" onClick={decrementQuantity}>-</button>
                    <input 
                    type="number" 
                    name="" 
                    id="" 
                    value={quantity}
                    onChange={handleQuantity}
                    />
                    <button className="btn btn-outline-dark" onClick={incrementQuantity}>+</button>
                </div>
                <button className="btn bg-warning text-white add-to-cart-btn my-4">Add to card</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetails