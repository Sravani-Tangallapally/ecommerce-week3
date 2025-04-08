// import React from 'react'
// import './Footer.css'

// import footer_logo from '../Assets/logo_big.png'
// import instagram_icon from '../Assets/instagram_icon.png'
// import pintrest_icon from '../Assets/pintester_icon.png'
// import whatsapp_icon from '../Assets/whatsapp_icon.png'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="footer-logo">
//         <img src={footer_logo} alt="" />
//         <p>Fashion Club</p>
//       </div>
//       <ul className="footer-links">
//         <li>Company</li>
//         <li>Products</li>
//         <li>Offices</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//       <div className="footer-social-icons">
//         <div className="footer-icons-container">
//             <img src={instagram_icon} alt="" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={pintrest_icon} alt="" />
//         </div>
//         <div className="footer-icons-container">
//             <img src={whatsapp_icon} alt="" />
//         </div>
//       </div>
//       <div className="footer-copyright">
//         <hr />
//         <p>Copyright @ 2024 - All Right Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import "./Footer.css";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h2>Sleek Mart</h2>
            <p>Discover timeless elegance with our expertly curated collection of luxury essentials.</p>
            <div className="social-icons">
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://twitter.com" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/shop/fashion">Fashion</Link></li>
              <li><Link to="/shop/beauty">Beauty</Link></li>
              <li><Link to="/shop/accessories">Accessories</Link></li>
              <li><Link to="/shop/wellness">Wellness</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@timelesscuration.com">support@timelesscuration.com</a></li>
              <li>Phone: +91 (555) 123-4567</li>
              <li>123 Heritage Street, Suite 10,<br />Banjara Hills, Hyderabad, Telangana 500034</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Sleek Mart. All rights reserved.</p>
          {/* <div className="payment-icons">
<img src="/images/visa.jpg" alt="Visa" />
<img src="/images/mastercard.jpg" alt="Mastercard" />
<img src="/images/paypal.jpg" alt="PayPal" />
<img src="/images/applepay.jpg" alt="Apple Pay" />

</div> */}


        </div>
      </div>
    </footer>
  );
};

export default Footer;

