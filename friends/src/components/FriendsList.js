import axios from "axios";
import React from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import AddFriend from "./AddFriend"


class FriendsList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            friendsList: []
        }
    }


    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth().get("/friends")
        .then(res => {
            // console.log(res.data);
            this.setState({
                friendsList: res.data
            })
            this.formatFriends();
        })
        .catch(err => {
            console.log(err)
        })
    }

    formatFriends = () => {
        const formattedFriends = [];
        // console.log(this.state.friendsList);
        this.state.friendsList.forEach((name, age, email) => {
            return formattedFriends.push({
                id: name.id,
                name: name.name,
                age: name.age,
                email: name.email
            })
        })
        return formattedFriends
    }


    render() {
        const friends = this.formatFriends();
        // console.log(friends)
        return (
            <div>
            {friends.length > 0 && (
                <div>
                {friends.map(friend => (
                    <p>{friend.name} | {friend.age} | {friend.email}</p>
                ))}
                </div>
                
            )}
            </div>

        )
    }
}

export default FriendsList