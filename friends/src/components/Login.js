import axios from "axios";
import React from "react";

class Login extends React.Component {
    state = {
        userInfo:{
            username: "",
            password: "",
        }
    }

    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.userInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/friendslist")
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.userInfo.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.userInfo.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        )
    }
}

export default Login