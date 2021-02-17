
import { makeStyles } from '@material-ui/core/styles'


const Styling = () => {
  const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  authForm: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
      background: 'linear-gradient(45deg, #686868 50%, #81d4d4 90%)',
      boxShadow: '0 3px 5px 2px rgba(180, 180, 180, .3)',
    }
  }
})); 
  return useStyles();
}


export default Styling;