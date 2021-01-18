import React, {useState} from "react";
import axios from "axios"
import {axiosWithAuth} from "../utils/axiosWithAuth"

function AddFriend () {

    const initialState = {
        id: "",
        name: "",
        age: "",
        email: ""
    }

    const [newFriend, setNewFriend] = useState(initialState)


    function addFriend (props) {
        axiosWithAuth().post("/friends",
        newFriend)
        .then(res => {
            console.log(res.data)
            return {
                ...newFriend,
                id: Date.now(),
                name: props.target.value
            }

        })
        .catch(err => {
            console.log(err)
        })

        // props.history.push("/friendslist")
    }

    const handleChange = e => {

        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

   const handleSubmit = e => {
    e.preventDefault();
        const addedFriend = {
            id: Date.now(),
            name: newFriend.name,
            age: newFriend.age,
            email: newFriend.email
        }

        addFriend(addedFriend)
        console.log(addedFriend)

        setNewFriend({
            id:"",
            name:"",
            age:"",
            email:""
        })
    }

        return (
            <div>
            <h2>ADD FRIEND</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" value={newFriend.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">age:</label><br/>
                    <input onChange={handleChange} name="age" id="age" value={newFriend.age}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">email:</label><br/>
                    <input onChange={handleChange} name="email" id="email" value={newFriend.email}/>
                </div>

                <button>Submit Friend</button>
            </form>
            </div>

        )
    
}

export default AddFriend