import React, { useEffect } from 'react'
import Single from './Single';
import Item from './Single';
import {BiCategory} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../../../../redux/slices/jobsSlice';
import { setCategory } from '../../../../../redux/slices/jobsSlice';


export default function List() {

  const jobCategory = useSelector(state => state.jobs.category)
  // console.log(jobCategory);

  const jobs = useSelector(state => state.jobs.data)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchJobs())
  },[])

  let unique_categories = jobs
  .map((job, key) => job.category)
  .filter((value, index, current_value) => current_value.indexOf(value) === index);


  return (
    <div className='categories'>
      <h6 className="title">
        <BiCategory className='icon' />
        Categories
      </h6>
      <div className="group-container">
        {/* <Single category={'All'} /> */}
        {unique_categories.map((category, index) => (
           <Single key={index} category={category} />
        ))}
      
      </div>
    </div>
  )
}
