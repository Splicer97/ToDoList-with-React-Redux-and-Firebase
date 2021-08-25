import React from 'react';
import useStyles from "./styles";
import {Box, Grid, Typography, Button} from "@material-ui/core";

function ToDoAction() {
    const classes = useStyles()
    return (
           <Grid
               container
               direction="row"
               justify="space-between"
               alignItems="center"
           >
               <Typography classes={{root: classes.textstyle}} variant="subtitle2">
                   item left
               </Typography>
                   <Box>
                       <Button  classes={{root: classes.root}}>All</Button>
                       <Button classes={{root: classes.root}}>Active</Button>
                       <Button classes={{root: classes.root}}>Completed</Button>
                   </Box>
               <Typography
                   classes={{root: classes.textstyle}}
                   variant="subtitle2"
                   >
                   Clear completed
               </Typography>
           </Grid>
    );
}
 export default ToDoAction