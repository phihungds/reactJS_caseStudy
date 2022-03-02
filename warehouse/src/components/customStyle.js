import { makeStyles } from "@mui/material/";
import { alpha, styled } from '@mui/material/styles';
import {TextField} from '@mui/material'
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });
  export default CssTextField