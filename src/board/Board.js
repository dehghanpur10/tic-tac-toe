import {useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import classes from './Board.module.css'
import {createTheme, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Item from "./item/item";

const initArray = new Array(9).fill('O')
const initArray2 = new Array(9).fill('X')

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
    function reset(){
        setArray([...initArray2])
    }
    return (
        <Box className={classes.container}>
            <ThemeProvider theme={theme} >
                <Button variant="outlined" onClick={reset} >Reset</Button>
            </ThemeProvider>
            <box  className={classes.main}>
                <box className={classes.board}>
                    <box className={classes.boardRow}>
                        <Item type={array[0]}/>
                        <Item type={array[1]}/>
                        <Item type={array[2]}/>
                    </box>
                    <box className={classes.boardRow}>
                        <Item type={array[3]}/>
                        <Item type={array[4]}/>
                        <Item type={array[5]}/>
                    </box>
                    <box className={classes.boardRow}>
                        <Item type={array[6]}/>
                        <Item type={array[7]}/>
                        <Item type={array[8]}/>
                    </box>
                </box>
            </box>
            <Box><Typography className={classes.turn}>turn: {turn}</Typography></Box>
        </Box>
    );
}

export default Board;