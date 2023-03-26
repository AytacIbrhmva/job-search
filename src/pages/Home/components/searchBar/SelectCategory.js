import { useState, useEffect } from 'react';
import {BiCategory} from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setCategory, removeCategory } from '../../../../redux/slices/jobsSlice';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 'auto',
      backgroundColor: '#fff',
      marginTop: '3px',
    }
  }
};

const SelectCategory = () => {

    // jobs
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs.data)
    useEffect(() =>{
      dispatch(fetchJobs())
    },[])
    let unique_categories = jobs
    .map((job, key) => job.category)
    .filter((value, index, current_value) => current_value.indexOf(value) === index);

    // categories
    const categoryState = useSelector(state => state.jobs.category)

    // checked categories
    const [checkedCategories, setCheckedCategories] = useState(categoryState);
    const handleChange = (event) => {
      const {
        target: { value }
      } = event;
      setCheckedCategories(
        typeof value === "string" ? value.split(",") : value
      );
    };

    useEffect(() => {
      
      for(let i = 0; i < checkedCategories.length; i++) {
        if( categoryState.indexOf(checkedCategories[i]) == -1) {
          dispatch(setCategory(checkedCategories[i]))
        } 
      }

      for(let i = 0; i < categoryState.length; i++) {
        if( checkedCategories.indexOf(categoryState[i]) == -1) {
          dispatch(removeCategory(i))
        } 
      }
      
    }, [checkedCategories])


  return (
    <div className="category">
        <Select
            sx={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            width: '100%',
            zIndex: 99,
            position: 'absolute',
            padding: '0 10px',
            '.MuiOutlinedInput-notchedOutline': { border: 0, outline: 'none' },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid rgb(9, 222, 108)",

            }
            }}
            multiple
            displayEmpty
            value={checkedCategories}
            onChange={handleChange}
            // input={<OutlinedInput/>}
            renderValue={(selected) => {
            if (selected.length === 0) {
                return <label className='category-label'>
                <BiCategory className='icon' />
                Category
                </label>;
            }

            return selected.join(", ");
            }}
            MenuProps={MenuProps}
        >
            {unique_categories.map((name) => (
              <MenuItem key={name} value={name} >
                  <Checkbox checked={checkedCategories.indexOf(name) > -1} />
                  <ListItemText primary={name} />
              </MenuItem>
            ))}
        </Select>
    </div>
  )
}

export default SelectCategory