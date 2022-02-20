import React from 'react';
import { Slide, useScrollTrigger } from '@material-ui/core';

const ScrollToHide01 = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: props.threshold,
        target: props.window ? window() : undefined,
    });

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
};

export default ScrollToHide01;
