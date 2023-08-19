import * as React from 'react';

import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

export default function CardBlock(props) {
  const {
    title,
    description,
    component: Component,
    isOnline,
    setIsOnline,
    volume,
    setVolume,
    quality,
    setQuality,
  } = props;
  
  return (
    <Card class="card-block">
      <CardContent>
        <Typography variant="h5" component="div" style={{ fontWeight: 300, margintop: 20 }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} style={{ paddingTop: 15 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Component
        isOnline={isOnline}
        setIsOnline={setIsOnline}
        volume={volume}
        setVolume={setVolume}
        quality={quality}
        setQuality={setQuality}
        />
      </CardActions>
    </Card>
  );
}