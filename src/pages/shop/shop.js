import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.js';
import SHOP_DATA from './shop.data.js';



export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }


  // render() {
  //   const { collections } = this.state;
  //   return (
  //     <div className='shop-page'>
  //       {
  //         collections.map(({id, ...otherCollectionProps}) => (
  //           <CollectionPreview key={id} {...otherCollectionProps} />
  //         ))
  //       }
  //     </div>
  //   )
  // }


  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(collection => (
            <CollectionPreview key={collection.id} collection={collection} />
          ))
        }
      </div>
    )
  }



}


export default ShopPage
