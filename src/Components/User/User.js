import React from "react";
import Axios from 'axios';
import "./User.css";
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {users: [], message: "STILL LOADING..."}

      Axios({
            method: "get",
            url: "http://54.245.42.196/users"
      }).then((response) => {
          console.log("response", response);
          this.setState({users: response.data})
      }).catch((err) => {
          console.log(err);
      })
    }
    render(){
        console.log(this.state.users);
        var users = this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.password}</td>
                </tr>
            )
        })
        console.log(users)
        return(
            <div>
                <h1>This is the User</h1>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Created</th>
                            <th>Password</th>
                        </tr>
                    </thead> 
                    {users}   
                </table>
            </div>
        )
    }
}
export default User;

               
                
                    
                    