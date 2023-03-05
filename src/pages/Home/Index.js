import React from 'react';
import Searchbar from './components/searchBar/Searchbar';
import Sidebar from './components/sidebar/Sidebar';
import JobList from './components/jobGroup/List';

function Home() {
  return (
    <div className='home'>
      <Searchbar />
      <div className="container">
        <div className="main">
          <Sidebar />
          <JobList />
        </div>
      </div>
    </div>
  )
}

export default Home