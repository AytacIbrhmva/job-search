import React from 'react'
import Single from './Single';
import Item from './Single';
import {BiCategory} from 'react-icons/bi';




export default function List() {



  return (
    <div className='categories'>
      <h6 className="title">
        <BiCategory className='icon' />
        Categories
      </h6>
      <div className="group-container">
        <Single  category={'All'} />
        <Single  category={'Financial services'}/>
        <Single  category={'Computing and ICT'}/>
        <Single  category={'Engineering'}/>
        <Single  category={'Management'} />
        <Single  category={'Marketing'}/>
      </div>
    </div>
  )
}
