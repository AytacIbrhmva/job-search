import { useState, useEffect } from 'react';
import {FiSearch, FiFilter} from 'react-icons/fi';
import {BiMap, BiSearch, BiCategory} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';
import {RiMoneyEuroBoxLine} from 'react-icons/ri';

import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../../../redux/slices/jobsSlice';
import SelectCategory from './SelectCategory';

function Searchbar() {  
 
  const [getSearch, setGetSearch] = useState('')
  const dispatch = useDispatch();
  const searchRole = useSelector(state => state.jobs.search)
  useEffect(() => {
    dispatch(setSearch(getSearch))
  }, [getSearch])
  


  return (
    <div className='searchbar'>
        <div className="container">
          <SelectCategory />

            <form action="">
              <div className="input-col">
                <BiSearch className='icon' />
                <input onChange={(e) => setGetSearch(e.target.value)} type="text" placeholder='Search'/>
              </div>   
              <button type='submit' className='search-btn'>Find Job</button>
            </form>
        </div>
    </div>
  )
}

export default Searchbar