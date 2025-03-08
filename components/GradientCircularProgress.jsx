import { Fragment } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const GradientCircularProgress = () => {
    return (
        <Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00e187"/>
                        <stop offset="100%" stopColor="#FFFFFF"/>
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}/>
        </Fragment>
    );
}

export default GradientCircularProgress;