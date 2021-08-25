import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    root: {
        textDecoration: ({isCompleted}) => isCompleted ?  'line-through' :  'none'
    }
})

export default useStyles