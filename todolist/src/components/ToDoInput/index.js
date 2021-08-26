import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/slices/Todo";
import {v4} from "uuid";
import {Grid, Paper} from "@material-ui/core";

function ToDoInput() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        const newTodo = {
            id: v4(),
            title: text,
            isCompleted: false,
        }
        dispatch(addTodo(newTodo))
        e.preventDefault();
        addTodo(text);
        setText("")
    }

    return (
        <Paper square classes={{root: classes.width}}>
            <Grid
                container
                xs={12}
            >
                <Grid
                    item
                    xs={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <ExpandMoreIcon classes={{root: classes.root}}/>
                </Grid>
                <Grid item xs={11}>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            classes={{root: classes.width}}
                            value={text}
                            fullWidth
                            onChange={
                                (e) => setText(e.target.value)
                            }
                            placeholder="What needs to be done?"
                        />
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ToDoInput;