import React, {useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../../../redux/slices/jobsSlice';
import Job from './Single';
import LoadingIcon from '../../../../assets/img/loading-icon.svg';


function List() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  const [sortType, setSortType] = useState("newest");
  const sortedData = useMemo(() => {
    let result = jobs.data;

    if(sortType === "salary") {
      result = [...jobs.data].sort((a,b) => {
        return parseFloat(b.salary) - parseFloat(a.salary);});
    } else if(sortType === "role") {
      result = [...jobs.data].sort((a, b) => {
        return a.role.localeCompare(b.role);
      });
    } else if (sortType === "newest") {
      result = [...jobs.data].sort((a, b) => 
      Date.parse(new Date(b.start_date.split(".").reverse().join("-"))) - 
      Date.parse(new Date(a.start_date.split(".").reverse().join("-"))));
    } else {
      return jobs.data
    }      
    
    return result;
  }, [jobs.data, sortType])

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])


  return (
    <div className='job-list'>
        <div className="list-header">
            <h1 className="results">Showing {jobs.data.length} Jobs</h1>
            <div className="sorting">
              <label htmlFor="">Sort by: </label>        
              <select
              onChange={(e) => setSortType(e.target.value)} 
              name="" id="">
                  <option value="newest">Newest Post</option>
                  <option value="salary">Salary</option>
                  <option value="role">Position name A - Z</option>
              </select>
            </div>
        </div>

        <div className="list-container"> 
         

          {jobs.loading &&  <img className='loading-img' src={LoadingIcon} alt="" />}
          {jobs.error && jobs.error}
          {jobs.data.length > 0 && 
            sortedData.filter((job) => job.category.includes("")).map((job) => (
                <Job key={job.id} job={job} />
            ))
          }
        </div>
            {/* <Job src={'https://jobsearch.az/storage/pages/5967/pasha-technology.svg'} />
            <Job src={'https://jobsearch.az/storage/pages/7220/unibank.svg'} />
            <Job src={'https://jobsearch.az/storage/pages/2277/atesgah-logo.svg'} />
            <Job src={'https://jobsearch.az/storage/pages/4286/golden-pay.svg'} />
            <Job src={'https://jobsearch.az/storage/pages/2497/azerconnect-new-logo.svg'} /> */}
    </div>
  )
}

export default List