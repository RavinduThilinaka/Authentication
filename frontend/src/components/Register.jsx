import React from 'react'
import '../App.css'
import { Box } from "@mui/material"
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='myBackground'>
      <Box className="whiteBox">

        <Box className="itemBox">
           <Box className="title">User Registration</Box>
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
           <MyPassField
           label="confirm password"/>
        </Box>

        <Box className="itemBox">
            <MyButton
            label="Regsiter "/>
        </Box>

        <Box className="itemBox ">
            <Link to={"/"}>Already registered please Login</Link>
        </Box>
      </Box>
    </div>
  )
}

export default Register
