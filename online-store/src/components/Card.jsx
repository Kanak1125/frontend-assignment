import { useNavigate } from "react-router-dom"
import ProductDetails from "./ProductDetails"

const Card = (props) => {
  const {id, imageUrl, title, price} = props;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/product/${id}`);
  }

  return (
    <div className="col-md-2 h-100">
        <div className="card mx-auto p-3 overflow-hidden" onClick={handleCardClick}>
            <div className="card-container">
                <img src={imageUrl} className="card-img" alt=""/>
            </div>
            <div className="card-body">
                <h5 className="card-title text-warning text-nowrap">{title}</h5>
                <p className="card-text">${price}</p>
                {/* <a href="#" className="btn btn-primary w-100">Add to card btn</a> */}
            </div>
        </div>
    </div>
  )
}

export default Card