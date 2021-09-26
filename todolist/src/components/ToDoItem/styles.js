import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    root: {
        textDecoration: ({isCompleted}) => isCompleted ?  'line-through' :  'none',
        color: ({isCompleted}) => isCompleted ?  '#c5c5c5' :  'black',
        marginLeft: 10,
    },
    clear: {
       color: "#e3d2d1",
    },
    list: {
        width: '100%',
        padding: 0,
    },
    checkIcon: {
        color: "green",

    },
})

export default useStyles