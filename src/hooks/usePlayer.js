import { useState } from 'react';


import { randomTetromino } from '../tetroMinos';


export const usePlayer = () => {
    // const playerState = useState();
    // const player = playerState[0];
    // const setPlayer = playerState[1]; Below line is the short 
    // form of this three lines of code..
    const [player, setPlayer] = useState({
        pos: { x: 0 , y: 0},
        tetromino: randomTetromino().shape,
        collided: false
    });

    return [player];
}