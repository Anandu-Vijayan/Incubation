import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ALogin.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }

const theme = createTheme();

function ALogin() {
  const Navigate = useNavigate('')
  // const [user, setUser] = useState({
  //   email: "", password: ""
  // })

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  


  // const handleChange = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setUser({ ...user, [name]: value })
  // }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({email,password});
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      }
      // setLoading(true);
      const { data } = await axios.post(
        "/login",
        {
          email: email,
          password: password,
          
        },
        config
        
      );
      console.log(data);

      localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ADMIN LOG IN
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
               
              onChange={(e)=>setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              {/* <Grid item>
                <Link className='pointer' onClick={() => { Navigate('/sign-up') }} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )
}

export default ALogin