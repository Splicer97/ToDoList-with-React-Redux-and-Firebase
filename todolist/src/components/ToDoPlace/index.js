import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./styles";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


function ToDoPlace() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const classes = useStyles()
    return (
            <form>
                <TextField id="standard-basic"
                           label="Second Position"
                           fullWidth
                           InputProps={{
                               startAdornment:
                                   <InputAdornment position="start">
                                       <Checkbox
                                           onChange={handleChange}
                                       />
                                   </InputAdornment>,

                           endAdornment:
                    <InputAdornment position="end">
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </InputAdornment>
                           }}
                />
            </form>
    );
}

export default ToDoPlace;