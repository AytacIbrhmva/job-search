import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../../../redux/features/jobsSlice';
import Job from './Single';






function List() {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs())

    // fetch('http://localhost:3010/jobList').then((res) => res.json())
    // .then((data) => {
    //     data.sort((a, b) => b.salary - a.salary);
    //     console.log({data});
    // });
  
    // fetch('http://localhost:3010/jobList').then((res) => res.json())
    // .then((data) => {
    //   data.sort((a,b) => a.salary.localeCompare(b.salary));
    //   console.log({data: data});
    // });

  }, [])


  const [sortType, setSortType] = useState();
  const sortMethods = {
    newest: {method: (a,b) => a - b},
    salary: {method: (a, b) => a.salary - a.salary},
    position_name: {method: (a,b) => a.role - b},
  };

 
  return (
    <div className='job-list'>
      {/* <h1>test{sortType}</h1> */}
        <div className="list-header">
            <h1 className="results">Showing 46 Jobs</h1>
            <div className="sorting">
              <label htmlFor="">Sort by: </label>        
              <select onChange={(e) => setSortType(e.target.value)} name="" id="">
                  <option value="newest">Newest Post</option>
                  <option value="salary">Salary</option>
                  <option value="position_name ">Position name A - Z</option>
              </select>
            </div>
        </div>

        <div className="list-container"> 
          {jobs.loading && "loading..."}
          {jobs.error && jobs.error}
          {jobs.data.length > 0 && 
            jobs.data.map((job) => (
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