// import React from "react";
// import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";
// import hand_icon from "../Assets/hand_icon.png";
// import arrow_icon from "../Assets/arrow.png";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>NEW ARRIVALS ONLY</h2>
//         <div>
//           <div className="hero-hand-icon">
//             <p>new</p>
//             <img src={hand_icon} alt="" />
//           </div>
//           <p>collections</p>
//           <p>for everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//           <div>Latest Collection</div>
//           <img src={arrow_icon} alt="" />
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="hero-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
             Where Style Meets Simplicity
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Curated for You
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Discover our handpicked collection of premium products that blend sophistication with modern style.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <Link to="/womens" className="hero-shop-btn">
  Shop Now
</Link>

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;