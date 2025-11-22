import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import {Controller,useForm} from 'react-hook-form'
export default function MyPasswordField({ label,name,control, ...rest }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (

        <Controller
            name={name}
            control = {control}
            render = {({
              field:{onChange,value},
              fieldState:{error},
              formState,
          })=>(
    
          <FormControl variant="outlined" fullWidth className="myForm">
              <InputLabel htmlFor={label}>{label}</InputLabel>

                <OutlinedInput
                  id={label}
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  type={showPassword ? 'text' : 'password'}
                  label={label}
                  {...rest}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
                  }
                />

                <FormHelperText sx={{color:"#d32f2f"}}>{error?.message}</FormHelperText>
            </FormControl>
          )}
        />

   
  );
}
