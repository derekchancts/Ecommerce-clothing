import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';


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


// const CollectionItem = ({ item, addItem }) => (
//   <div className='collection-item'>
//     <div 
//       className='image'
//       style={{
//         backgroundImage: `url(${item.imageUrl})`
//       }} 
//     />
//     <div className="collection-footer">
//       <span className="name">{ item.name }</span>
//       <span className="price">{ item.price }</span>
//     </div>
//     <CustomButton inverted onClick={() => addItem(item)} >Add to cart</CustomButton>
//   </div>
// )




const CollectionItem = ({ item, addItem }) => {
  
// const { id, name, price } = item;

// const newItem = {
//   id,
//   name,
//   price
// }

 return (
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
    <CustomButton inverted onClick={() => addItem(item)} >Add to cart</CustomButton>
  </div>
 )
}




const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch(addItem(newItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem)


