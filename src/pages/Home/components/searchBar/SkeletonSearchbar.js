import React from 'react';
import { Skeleton } from '@mui/material';

export default function SkeletonSearchbar() {
  return (
    <div>
        <Skeleton variant='rectangular' width={'100%'} height={'100px'} style={{borderRadius: '10px'}} />
    </div>
  )
}
