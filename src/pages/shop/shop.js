import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collection/collection'

// import CollectionPreview from '../../components/collection-preview/collection-preview.js';
// import SHOP_DATA from './shop.data.js';

// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect';
// import { selectCollections } from '../../redux/shop/shop-selectors'


// export class ShopPage extends Component {

    // state = {
    //   collections: SHOP_DATA
    // }


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


  // const ShopPage = ({ collections }) => (
  //   <div className='shop-page'>
  //     {
  //       collections.map(collection => (
  //         <CollectionPreview key={collection.id} collection={collection} />
  //       ))
  //     }
  //   </div>
  // )


  const ShopPage = ({ match }) => {
    // console.log(match)
    return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )}


// const mapStateToProps = createStructuredSelector ({
//   collections: selectCollections
// })


// export default connect(mapStateToProps)(ShopPage)

export default ShopPage;
