import React from "react";
import Axios from 'axios';


class Dashboard extends React.Component{
    constructor(props){
        super(props)
         this.state={user_id:[]} 
        
    }
     componentDidMount(){
      Axios.get(`http://54.245.42.196/posts/${this.props.match.params.user_id}`, { headers: {
            Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            console.log("result", result.data.posts)
            this.setState({user_id: result.data.posts})
        }).catch((err)=> {
            console.log("unsuccessful");
        })
    }

    render(){
        console.log(this.state.users);
        var postOfUsers = this.state.user_id.map((valueOfUsers, index) => {
            console.log(valueOfUsers)
            return (
                <div key={index}>
                    <h3>Author{valueOfUsers._author.username } | Created:{valueOfUsers.createdAt}</h3>
                    <h4>Post:{valueOfUsers.post}</h4>
                </div>
            )
        })
        return(
            <div>
                <h1>The Wall</h1>
                {postOfUsers}
            </div>
        )
    }
}
export default Dashboard;
                   