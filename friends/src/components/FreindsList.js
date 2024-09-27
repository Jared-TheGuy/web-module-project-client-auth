import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get('http://localhost:5000/api/login', {headers: { authorization: token }})
        .then(resp => {
            setFriends(resp.data)
            console.log(friends)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
        


    return( 
        <div>

        </div>
    )
}