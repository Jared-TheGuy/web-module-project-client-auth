import React from "react";
import axios from "axios";


const handleLogout = () => {
    const token = localStorage.getItem('token')
    axios.post('http://localhost:5000/api/logout', '', {headers: { authorization: token }})
    .then(resp => {
    localStorage.removeItem('token')
})
    .catch(err => {
    console.log(err)
})

}




const Logout = (props) => {

    return(
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>)
}

export default Logout;