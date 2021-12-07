import styles from "../App.module.css";
import {useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import classes from './Board.module.css'
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

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

    return (
        <Box className={classes.container}>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" className={classes.reset_button}>Reset</Button>
            </ThemeProvider>
            <box className={classes.main}>
                <box className={classes.board}>
                    {array.map((item) => {
                        
                    })}
                </box>
            </box>
        </Box>
    );
}

export default Board;