import Button from '@mui/material/Button';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import classes from './item.module.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#f57c00"
        },
    },
});

function Item(props) {

    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined"  className={classes.button} onClick={()=>{
                props.action(props.index)
            }}>{props.type}</Button>
        </ThemeProvider>
    );
}

export default Item;