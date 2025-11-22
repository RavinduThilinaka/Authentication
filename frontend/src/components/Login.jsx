import React from 'react'
import '../App.css'
import { Box } from "@mui/material"
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'

function Login() {

  const navigate = useNavigate()
    const { handleSubmit, control } = useForm({
      defaultValues: {
        email: '',
        password: '',
      }
    });

     const submission = (data) => {
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      console.log(response) 
      localStorage.setItem('Token',response.data.token)  // <-- added dot before then
       navigate(`/home`)
    })
    .catch((err) => {
      console.log('error during login',err)
    })
  }

  return (
    <div className='myBackground'>
      
    <form onSubmit={handleSubmit(submission)}>
      <Box className="whiteBox">

        <Box className="itemBox">
           <Box className="title">Login for Auth app</Box>
        </Box>

        <Box className="itemBox">
           <MyTextField
           label="email"
           name="email"
           control={control}/>
        </Box>

        <Box className="itemBox">
           <MyPassField
           label="password"
            name="password"
           control={control}/>
        </Box>

        <Box className="itemBox">
            <MyButton
            label="Login "
            type="submit"/>
        </Box>

        <Box className="itemBox ">
            <Link to={"/register"}>No account yet Plase registered</Link>
        </Box>
      </Box>

      </form>
    </div>
  )
}

export default Login
