import React, {useEffect, useRef, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';


// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Single({category}) {


    const [checkedValue, setCheckValue] = useState(false);
    const handleChange = (e) => {
        setCheckValue(e.target.checked)
    }

  return (
    <div className='single'>
        <FormControlLabel 
            control={
                <Checkbox onChange={(e) => handleChange(e)}  size="small" name='category'
                    sx={{ 
                        '& .MuiSvgIcon-root': { 
                            fontSize: 20, 
                            width: 20,
                            height: 20
                            }
                    }}  
                />
            }
            label={
                <Typography sx={{fontSize: 14, fontWeight: 500, fontFamily: 'unset',fontFamily: 'Poppins'}}>
                    {category}
                </Typography>
            }
        >
        </FormControlLabel>
        <div className={checkedValue ? "amount active" : "amount" }>56</div>
    </div>
  )
}
