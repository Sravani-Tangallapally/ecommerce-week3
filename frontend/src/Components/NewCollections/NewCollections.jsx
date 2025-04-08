// import React from 'react'
// import './NewCollections.css'
// import Item from '../Item/Item'

// const NewCollections = (props) => {
//   return (
//     <div className='new-collections'>
//       <h1>NEW COLLECTIONS</h1>
//       <hr />
//       <div className="collections">
//         {props.data.map((item,index)=>{
//                 return <Item id={item.id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
//             })}
//       </div>
//     </div>
//   )
// }

// export default NewCollections
// NewCollections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NewCollections.css';
import { backend_url } from '../../App';

const newCollectionItems = [
  { id: 1, name: 'ZARA', image: '/images/zara.jpg', route: '/womens' },
  { id: 2, name: 'PUMA', image: '/images/pumabanner.jpg', route: '/mens' },
  { id: 3, name: 'BabyGap', image: '/images/babygap.jpeg', route: '/kids' },
];

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollectionItems.map((item) => (
          <Link to={item.route} key={item.id} className='brand-box'>
            <img src={backend_url + item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;



