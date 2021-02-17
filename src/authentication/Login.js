import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core"
import Styling from '../styling/Styling'

const Login = ({setUser, setLoggedIn}) => {

  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let check_user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(check_user)
    })
    .then(res => res.json())
    .then(response => {
      if (response.user) {
        setUser(response.user)
        setLoggedIn(true)
        localStorage.token = response.token
      } else {
        setErrors(response.message)
      }
    })
  }

  return(
    <div>
       <header className="App-page">
        <div className="error">{errors ? errors.map(error => <p>{error}</p>) : null}</div>
        <div className="auth">LOG IN</div>
      <form className={Styling().authForm} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          color="secondary"
          // onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <TextField
          id="password"
          label="Password"
          variant="filled"
          color="secondary"
          // onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <div className='submit'>
          <Button type='submit' variant="outlined" color="default">
            LOG IN
          </Button>
        </div>
        </form>
      </header>
    </div>
  )
}

export default Login;