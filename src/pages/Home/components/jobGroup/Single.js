import React from 'react';
import { Link } from 'react-router-dom';

function Single({job}) {
  return (
    <div className='job-card'>
      <img className='card-top-img' src={job.company.thumb} alt="company img"/>
      <div className="card-body">
        <div className="card-title">
          <h4 className="title">{job.role}</h4>
          <h4 className='subtitle'>{job.company.name}</h4>
        </div>
          <p className="desc">{job.desc}</p>
          <div className="job-details">
              <div className="col">{job.job_type}</div>
              <div className="col">{job.experience}</div>
              <div className="col">{job.salary}₼</div>
          </div>
          <Link to='/' className='apply-btn'>Apply Now</Link>
      </div>
    </div>
  )
}

export default Single