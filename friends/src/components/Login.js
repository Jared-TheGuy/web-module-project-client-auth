import React from "react";
import axios from "axios";
import { useState } from "react";

const testUser = {
    username: 'Jared',
    password: 'Bates'
}

// axios.post('http://localhost:5000/api/login', testUser)
// .then(resp => {
//   localStorage.setItem("token", resp.data.payload)
// })
// .catch(err => {
//   console.log(err)
// })

const login = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/login', testUser)
.then(resp => {
  localStorage.setItem("token", resp.data.payload)
})
.catch(err => {
  console.log(err)
})
}

const Login = (props) => {
    const [form, setForm] = useState(testUser)

    return(
    <div>
        <button onClick={login}>Login</button>
    </div>)
}

export default Login;