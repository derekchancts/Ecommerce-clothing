import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors'
import WithSpinner from '../../components/with-spinner/with-spinner'
import CollectionsOverview from './collections-overview'



const mapStateToProps = createStructuredSelector ({
  isLoading: selectIsCollectionFetching
})


// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps), 
  WithSpinner
)(CollectionsOverview);


export default CollectionsOverviewContainer;