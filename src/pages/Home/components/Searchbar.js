import * as React from 'react';

import { useState } from 'react';



import { useTheme } from "@mui/material/styles";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import {FiSearch, FiFilter} from 'react-icons/fi';
import {BiMap, BiSearch, BiCategory} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';
import {RiMoneyEuroBoxLine} from 'react-icons/ri';

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

const categorias = [
  "All",
  "Financial services",
  "Computing and ICT",
  "Engineering",
  "Management",
  "Marketing",
];


function Searchbar() {  
 
  const theme = useTheme();
  const [categoriasName, setCategoriasName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setCategoriasName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className='searchbar'>
        <div className="container">
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
                value={categoriasName}
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
                {categorias.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                  >
                      <Checkbox checked={categoriasName.indexOf(name) > -1} />
                      {/* <ListItemText primary={name} /> */}
                      <label className='option-text' htmlFor="">{name}</label>
                  </MenuItem>
                ))}
            </Select>

            
          </div>
            <form action="">
              <div className="input-col">
                <BiSearch className='icon' />
                <input type="text" placeholder='Job'/>
              </div>   
              <button type='submit' className='search-btn'>Find Job</button>
            </form>
        </div>
    </div>
  )
}

export default Searchbar