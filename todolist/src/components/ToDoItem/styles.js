import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    root: {
        textDecoration: ({isCompleted}) => isCompleted ?  'line-through' :  'none',
        color: ({isCompleted}) => isCompleted ?  '#c5c5c5' :  'black'
    }

})

export default useStyles