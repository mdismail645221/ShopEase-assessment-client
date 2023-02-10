import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LOADINGANIMATED } from './LoadingAnimation.styled';

export default function LoadingAnimation() {
  return (
    <LOADINGANIMATED sx={{ display: 'flex' }}>
      <CircularProgress />
    </LOADINGANIMATED>
  );
}