import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    shadow: {
        boxShadow:
                // Эффект стопки листов
            "0 1px 1px rgba(0,0,0,0.15)," +
            /* Второй слой */
            "0 10px 0 -5px #eee," +
            /* Тень второго слоя */
            "0 10px 1px -4px rgba(0,0,0,0.15)," +
            /* Третий слой */
            "0 20px 0 -10px #eee," +
            /* Тень третьего слоя */
            "0 20px 1px -9px rgba(0,0,0,0.15)," +
                // серая тень всего полотна
            "0 0px 10px   2px rgba(229, 229, 229, 0.5)," +
            "0 10px 12px   4px rgba(229, 229, 229, 0.5)," +
            "0 20px 14px   6px rgba(229, 229, 229, 0.5)," +
            "0 30px 16px   4px rgba(229, 229, 229, 0.5)," +
            "0 40px 18px   2px rgba(229, 229, 229, 0.5)" ,
    },

})


export default useStyles

