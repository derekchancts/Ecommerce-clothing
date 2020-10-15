/*
import React from 'react'
import { Route } from 'react-router-dom'

// import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container'
// import CollectionPage from '../collection/collection'
import CollectionPageContainer from '../collection/collection-container'

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

// import CollectionPreview from '../../components/collection-preview/collection-preview.js';
// import SHOP_DATA from './shop.data.js';

import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// import { updateCollections } from '../../redux/shop/shop-actions'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors'

// import WithSpinner from '../../components/with-spinner/with-spinner'

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


  // const ShopPage = ({ match }) => {
  //   // console.log(match)
  //   return (
  //   <div className='shop-page'>
  //     <Route exact path={`${match.path}`} component={CollectionsOverview} />
  //     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  //   </div>
  // )}



  // const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  // const CollectionPageWithSpinner = WithSpinner(CollectionPage);


  class ShopPage extends React.Component {
    // state = {
    //   loading: true
    // }

    // unsubsribeFromSnapshot = null;

    componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync()

      // const { updateCollections } = this.props;
      // const collectionRef = firestore.collection('collections');

      // collectionRef.onSnapshot(async snapshot => {
      //  //  console.log(snapshot.docs)
      //  const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
      //  // console.log(collectionsMap)
      //  updateCollections(collectionsMap);
      //  this.setState({ loading: false })
      // })


      // USING GET INSTEAD OF ONSNAPSHOT. WE GET BACK A PROMISE
      // collectionRef.get().then(
      //   snapshot => {
      //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
      //     updateCollections(collectionsMap);
      //     this.setState({ loading: false })
      //    }
      // )

      
      // USING FETCH
      // fetch('https://firestore.googleapis.com/v1/projects/crown-clothing-e95d4/databases/(default)/documents/collections')
      //   .then(res => res.json())
      //   .then(collections => console.log(collections))


    }

    // render() {
    //   const { match } = this.props;
    //   return (
    //   <div className='shop-page'>
    //     <Route exact path={`${match.path}`} component={CollectionsOverview} />
    //     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    //   </div>
    //   )
    // }

    // render() {
    //   const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    //   // const { loading } = this.state;

    //   return (
    //   <div className='shop-page'>
    //     <Route exact path={`${match.path}`} render={(props) => 
    //       <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} 
    //     />
    //     <Route path={`${match.path}/:collectionId`} render={(props) => 
    //       <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> } 
    //     />
    //   </div>
    //   )
    // }


    render() {
      const { match } = this.props;

      return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
         component={CollectionsOverviewContainer} 
        />
        <Route path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
      )
    }

  } 



// const mapStateToProps = createStructuredSelector ({
//   collections: selectCollections
// })


// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })


// const mapStateToProps = createStructuredSelector ({
//   // isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// })


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


// export default connect(mapStateToProps)(ShopPage)

export default connect(null, mapDispatchToProps)(ShopPage);






import React from 'react'
import { Route } from 'react-router-dom'

// import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container'
// import CollectionPage from '../collection/collection'
import CollectionPageContainer from '../collection/collection-container'

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

// import CollectionPreview from '../../components/collection-preview/collection-preview.js';
// import SHOP_DATA from './shop.data.js';

import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

// import { updateCollections } from '../../redux/shop/shop-actions'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors'

// import WithSpinner from '../../components/with-spinner/with-spinner'

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


  // const ShopPage = ({ match }) => {
  //   // console.log(match)
  //   return (
  //   <div className='shop-page'>
  //     <Route exact path={`${match.path}`} component={CollectionsOverview} />
  //     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  //   </div>
  // )}



  // const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  // const CollectionPageWithSpinner = WithSpinner(CollectionPage);
*/




import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container'
import CollectionPageContainer from '../collection/collection-container'

import { connect } from 'react-redux'
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
import { fetchCollectionsStart } from '../../redux/shop/shop-actions'




  const ShopPage = ({ fetchCollectionsStart, match }) => {

  
  // class ShopPage extends React.Component {
    
    // componentDidMount() {
    //   // const { fetchCollectionsStartAsync } = this.props;
    //   // fetchCollectionsStartAsync()

    //   const { fetchCollectionsStart } = this.props;
    //   fetchCollectionsStart()
    // }

    useEffect(() => {
      fetchCollectionsStart()
    },[fetchCollectionsStart])

    // render() {
      // const { match } = this.props;

      return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
         component={CollectionsOverviewContainer} 
        />
        <Route path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
      )
    // }
  } 


const mapDispatchToProps = (dispatch) => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);
