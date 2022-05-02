import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



import { Link } from "react-router-dom";
import Timer from './timer/Timer';

import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, resetTime } from './../../reduxToolKits/secondSlice';
import { setTrue, setFalse } from '../../reduxToolKits/statusSlice';


const Home = () => {


    const [Hour, setHour] = useState();
    const [Minute, setMinute] = useState();
    const [Second, setSecond] = useState();


    //Redux Time
    let time = useSelector((state) => state.second.value);
    let inStat = useSelector((state) => state.showStatus.status);



    const dispatch = useDispatch();

    const startCountDown = () => {
        console.log("Countdown Started");

        // time = Hour * 60 * 60 + Minute * 60 + Second * 1;
        dispatch(incrementByAmount(Hour * 60 * 60 + Minute * 60 + Second * 1));

        console.log(time);
        dispatch(setFalse());
    }

    const resetCountDown = () => {
        setHour();
        setMinute();
        setSecond();
        dispatch(resetTime());
        dispatch(setTrue());
    }

    return (
        <>
            <h3>Home</h3>
            <Link to="/about">About</Link>

            {
                inStat &&
                <>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h5>Set Timer</h5>
                        <TextField
                            id="filled-basic"
                            label="Hours"
                            variant="filled"
                            value={Hour}
                            onChange={(e) => { setHour(e.target.value); }}
                        />
                        <TextField
                            id="filled-basic"
                            label="Minutes"
                            variant="filled"
                            value={Minute}
                            onChange={(e) => { setMinute(e.target.value); }}
                        />
                        <TextField
                            id="filled-basic"
                            label="Seconds"
                            variant="filled"
                            value={Second}
                            onChange={(e) => setSecond(e.target.value)} />

                    </Box><button onClick={startCountDown}>Start</button>
                </>
            }

            {
                !inStat &&
                <>
                    <button onClick={resetCountDown}>Reset</button>


                    <Timer
                        seconds={Second}
                    />
                </>
            }
        </>
    )
}

export default Home