import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item'

import './directory.scss'


class Directory extends Component {
  constructor() {
    super()

    this.state = {
      sections : [
        {
          title: 'hats',
          // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', 
          imageUrl: "/images/hats.png",
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl: "/images/jackets.png",
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          imageUrl: "/images/sneakers.png",
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: "/images/womens.png",
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: "/images/men.png",
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
      
    }
  }


  // render() {
    
  //   return (
  //     <div className="directory-menu">
  //       { this.state.sections.map(({title, imageUrl, id, size}) => (
  //         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
  //       ) ) }
  //     </div>
  //   )
  // }


  // render() {
    
  //   return (
  //     <div className="directory-menu">
  //       { this.state.sections.map(({ id, ...otherSectionProps }) => (
  //         <MenuItem key={id} {...otherSectionProps} />
  //       ) ) }
  //     </div>
  //   )
  // }


  render() {
    return (
      <div className="directory-menu">
        { this.state.sections.map(section => (
          <MenuItem key={section.id} section={section} />
        ) ) }
      </div>
    )
  }


}

export default Directory