import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { decrement } from '../../../reduxToolKits/secondSlice';

const Timer = () => {

    const dispatch = useDispatch();

    const time = useSelector((state) => state.second.value);


    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTimeSec(time => time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const updateRemainingTimeSec = () => {
        if (time >= 0) {
            dispatch(decrement());
        }
    };

    return (
        <>
            <h3>Time remaining</h3>
            <h5>{Math.floor(time / 60 / 60)}h : {Math.floor((time / 60) % 60)} m : {time % 60} s</h5>
        </>
    )
}

export default Timer;