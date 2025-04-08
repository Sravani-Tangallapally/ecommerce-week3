import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(props.id, "M"); // using 'M' as default size (or remove if not needed)
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={backend_url + props.image}
          alt={props.name}
          title={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{currency}{props.new_price}</div>
        <div className="item-price-old">{currency}{props.old_price}</div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
