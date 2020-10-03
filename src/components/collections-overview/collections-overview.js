import React from 'react'
import './collection-overview.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { selectCollections } from '../../redux/shop/shop-selectors'
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'

import CollectionPreview from '../collection-preview/collection-preview'



const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
     {
      collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))
    }
  </div>
)



const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
