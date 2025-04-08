// import React, { useContext, useState } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { ShopContext } from "../../Context/ShopContext";
// import { backend_url, currency } from "../../App";

// const CartItems = () => {
//   const { products } = useContext(ShopContext);
//   const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
//   const [loading, setLoading] = useState(false);
//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   // Function to handle the checkout process
//   const handleCheckout = () => {
//     setLoading(true);
//     // Simulate a network request
//     setTimeout(() => {
//       setLoading(false);
//       // Implement actual checkout logic here
//     }, 2000);
//   };

//   // Function to handle the promo code application
//   const handlePromoCode = () => {
//     if (promoCode === 'FREE50') {
//       setDiscount(0.5); // 50% discount
//     } else {
//       setDiscount(0); // No discount
//       alert('Invalid promo code'); // Alert for invalid promo code
//     }
//   };

//   // Function to calculate the discounted total
//   const getDiscountedTotal = () => {
//     const totalAmount = getTotalCartAmount();
//     return totalAmount - (totalAmount * discount);
//   };

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {products.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format-main cartitems-format">
//                 <img className="cartitems-product-icon" src={backend_url + e.image} alt="" />
//                 <p className="cartitems-product-title">{e.name}</p>
//                 <p>{currency}{e.new_price}</p>
//                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                 <p>{currency}{e.new_price * cartItems[e.id]}</p>
//                 <img onClick={() => removeFromCart(e.id)} className="cartitems-remove-icon" src={cross_icon} alt="" />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}

//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>{currency}{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Promo Code Discount</p>
//               <p>-{currency}{getTotalCartAmount() * discount}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>{currency}{getDiscountedTotal()}</h3>
//             </div>
//           </div>
//           <button onClick={handleCheckout} disabled={loading}>
//             {loading ? 'Processing...' : 'PROCEED TO CHECKOUT'}
//           </button>
//           {loading && <div className="loader"></div>}
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, enter it here:</p>
//           <div className="cartitems-promobox">
//             <input
//               type="text"
//               placeholder="Promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//             <button onClick={handlePromoCode}>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const {
    products,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    clearCart,
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePromoCode = () => {
    if (promoCode === "FREE50") {
      setDiscount(0.5);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  const getDiscountedTotal = () => {
    const total = getTotalCartAmount();
    return total - total * discount;
  };

  return (
    <div className="cartitems">
      {/* Cart Section */}
      <div className="cartitems-product-section">
        <div className="cartitems-left">
          <div className="cartitems-header">
            <h2>Your Cart</h2>
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>

          {products.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="cartitem-box" key={item.id}>
                  <img
                    className="cartitem-image"
                    src={backend_url + item.image}
                    alt={item.name}
                    onClick={() => navigate(`/product/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="cartitem-info">
                    <p className="cartitem-title">{item.name}</p>
                    <p className="cartitem-category">
                      {item.category || "Product"}
                    </p>
                    <p className="cartitem-size">
    <strong>Size:</strong> {item.size || "M"}
  </p>
                    <p className="cartitem-quantity">
                      Quantity: {cartItems[item.id]}
                    </p>
                    <p className="cartitem-price">
                      Price: {currency}
                      {item.new_price * cartItems[item.id]}
                    </p>
                  </div>
                  <div className="cartitem-remove">
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Order Summary */}
        <div className="cartitems-right">
          <h2>Order Summary</h2>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>
              {currency}
              {getTotalCartAmount()}
            </p>
          </div>
          <div className="cartitems-total-item">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="cartitems-total-item">
            <p>Promo Discount</p>
            <p>
              -{currency}
              {(getTotalCartAmount() * discount).toFixed(2)}
            </p>
          </div>
          <div className="cartitems-total-item total">
            <h3>Total</h3>
            <h3>{currency}{getDiscountedTotal().toFixed(2)}</h3>
          </div>
          <button onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>

          {/* Promo Code */}
          <div className="cartitems-promocode">
            <p style={{ marginTop: "20px", fontSize: "13px" }}>
              Have a promo code?
            </p>
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoCode}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
