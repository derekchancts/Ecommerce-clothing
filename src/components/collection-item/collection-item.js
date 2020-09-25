import React from 'react'
import './collection-item.scss'


// const CollectionItem = ({ id, name, price, imageUrl }) => (
//   <div className='collection-item'>
//     <div 
//       className='image'
//       style{{
//         backgroundImage: `url(${imageUrl})`
//       }}
//     />
//     <div className="collection-footer">
//       <span className="name">{ name }</span>
//       <span className="price">{ price }</span>
//     </div>
//   </div>
// )

const CollectionItem = ({ item }) => (
  <div className='collection-item'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }} 
    />
    <div className="collection-footer">
      <span className="name">{ item.name }</span>
      <span className="price">{ item.price }</span>
    </div>
  </div>
)


export default CollectionItem 


