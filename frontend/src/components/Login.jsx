import React from 'react'
import '../App.css'
import { Box } from "@mui/material"
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='myBackground'>
      <Box className="whiteBox">

        <Box className="itemBox">
           <Box className="title">Login for Auth app</Box>
        </Box>

        <Box className="itemBox">
           <MyTextField
           label="email"/>
        </Box>

        <Box className="itemBox">
           <MyPassField
           label="password"/>
        </Box>

        <Box className="itemBox">
            <MyButton
            label="Login "/>
        </Box>

        <Box className="itemBox ">
            <Link to={"/register"}>No account yet Plase registered</Link>
        </Box>
      </Box>
    </div>
  )
}

export default Login
