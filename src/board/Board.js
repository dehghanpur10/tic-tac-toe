import {useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import classes from './Board.module.css'
import {createTheme, Snackbar, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Item from "./item/item";

const initArray = new Array(9).fill(' ')

const theme = createTheme({
    palette: {
        primary: {
            main: "#f57c00"
        },
    },
});

function Board() {
    const [array, setArray] = useState(initArray)
    const [turn, setTurn] = useState('X')
    const [win, setWin] = useState(false)

    function reset() {
        setArray([...initArray])
        setWin(false)
    }

    function checkWinner(temp) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const s = winningCombinations[i]
            if (
                temp[s[0]] === turn &&
                temp[s[1]] === turn &&
                temp[s[2]] === turn
            ) {
                return true
            }
        }
        return false
    }

    function action(index) {
        console.log(win)
        if (array[index] === ' ' && !win) {
            const tempArray = [...array]
            tempArray[index] = turn
            setArray(tempArray)
            if(checkWinner(tempArray)){
                setWin(true)
                return
            }
            setTurn(turn === 'X' ? 'O' : 'X')
        }
    }

    return (
        <Box className={classes.container}>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" onClick={reset}>Reset</Button>
            </ThemeProvider>
            <box className={classes.main}>
                <box className={classes.board}>
                    <box className={classes.boardRow}>
                        <Item type={array[0]} index={0} action={action}/>
                        <Item type={array[1]} index={1} action={action}/>
                        <Item type={array[2]} index={2} action={action}/>
                    </box>
                    <box className={classes.boardRow}>
                        <Item type={array[3]} index={3} action={action}/>
                        <Item type={array[4]} index={4} action={action}/>
                        <Item type={array[5]} index={5} action={action}/>
                    </box>
                    <box className={classes.boardRow}>
                        <Item type={array[6]} index={6} action={action}/>
                        <Item type={array[7]} index={7} action={action}/>
                        <Item type={array[8]} index={8} action={action}/>
                    </box>
                </box>
            </box>
            <Box><Typography className={classes.turn}>turn: {turn}</Typography></Box>
            <Snackbar
                open={win}
                autoHideDuration={6000}
                message={turn + " is winner"}
            />
        </Box>
    );
}

export default Board;