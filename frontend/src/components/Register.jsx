import React from 'react'
import '../App.css'
import { Box } from "@mui/material"
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
      password2: '',
    }
  });

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
    })
    .then(() => {   // <-- added dot before then
      navigate(`/`)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='myBackground'>
      <form onSubmit={handleSubmit(submission)}>
        <Box className="whiteBox">

          <Box className="itemBox">
            <Box className="title">User Registration</Box>
          </Box>

          <Box className="itemBox">
            <MyTextField
              label="email"
              name="email"
              control={control}
            />
          </Box>

          <Box className="itemBox">
            <MyPassField
              label="password"
              name="password"
              control={control}
            />
          </Box>

          <Box className="itemBox">
            <MyPassField
              label="confirm password"
              name="password2"
              control={control}
            />
          </Box>

          <Box className="itemBox">
            <MyButton
              type={"submit"}
              label="Register"
            />
          </Box>

          <Box className="itemBox ">
            <Link to={"/"}>Already registered please Login</Link>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default Register
