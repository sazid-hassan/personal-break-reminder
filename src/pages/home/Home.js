import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


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
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#ebecf7', height: '100vh', width: 'auto' }}>
                    {
                        inStat &&
                        <>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '15ch' },
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

                            </Box>
                            <Button
                                onClick={startCountDown}
                                variant="contained"
                                color="success">
                                Start
                            </Button>
                        </>
                    }

                    {
                        !inStat &&
                        <>
                            <Timer
                                seconds={Second}
                            />

                            <Button
                                variant="outlined"
                                onClick={resetCountDown}
                                color="error">
                                Reset
                            </Button>
                        </>
                    }
                </Box>

            </Container>

        </>
    )
}

export default Home