import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    shadow: {
        boxShadow:
            "0 1px 1px rgba(0,0,0,0.15)," +
            /* Второй слой */
            "0 10px 0 -5px #eee," +
            /* Тень второго слоя */
            "0 10px 1px -4px rgba(0,0,0,0.15)," +
            /* Третий слой */
            "0 20px 0 -10px #eee," +
            /* Тень третьего слоя */
            "0 20px 1px -9px rgba(0,0,0,0.15)",
    }
})

export default useStyles