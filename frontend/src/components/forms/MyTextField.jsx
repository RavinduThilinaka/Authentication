import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../App.css'
import {Controller,useForm} from 'react-hook-form'
export default function MyTextField(props) {

    const {label,name,control} =props
  return (

    <Controller
      name={name}
      control = {control}
      render = {({
        field:{onChange,value},
        fieldState:{error},
        formState,
      })=>(

         <TextField 
            id="outlined-basic"
            onChange={onChange} 
            value={value}
            label={label}
             
            variant="outlined"
            error={!!error}
            helperText={error?.message}
            className='myForm' />
      )}
    />
   
     /*
    */  
  );
}
