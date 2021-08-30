import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    color: "#c5c5c5",
  },
  active: {
    border: '1px solid',
    borderColor: '#e3d2d1',
    lineHeight: 1,
  },
  textStyle: {
    color: "#c5c5c5",
    paddingLeft: 10,
  },
})

export default useStyles