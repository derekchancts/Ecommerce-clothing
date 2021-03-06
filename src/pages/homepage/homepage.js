import React from 'react'
import Directory from '../../components/directory/directory'
import { HomePageContainer } from './homepage-styles'

// import './homepage.scss'

// const HomePage = () => (
//   <div className="homepage">
//     <Directory />
//   </div>
// )

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)

export default HomePage
