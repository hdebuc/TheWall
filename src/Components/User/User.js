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
                <div key={index}>
                    <table>
                        <thead> 
                            <tr>
                            <td>{user.username}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.password}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            )
        })
        return(
            <div>
                <h1>This is the User</h1>
                <td>{users}<br/></td>
            </div>
        )
    }
}
export default User;
               
                
                    
                    