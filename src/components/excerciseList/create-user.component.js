import React, { Component } from 'react';
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state = {
             userName:''
            }
    }

    onChangeUsername(e) {
        this.setState({
            userName: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
    
        const user={
            userName: this.state.userName
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add')
    
        this.setState({
            userName:''
        })
    }

    render() {
        return (
            <div>
                <h3> Create New Exercise Log</h3>
                    <form onSubmit = {this.onSubmit}>
                        <div className ="form-group">
                            <label >Username:</label>
                        <input type = "text" 
                        required
                        className ="form-control" 
                        value= { this.state.userName }
                        onChange ={ this.onChangeUsername }
                        />
                        </div>
                        <div className ="form-group">
                        <input type = "submit" value = "Create Exercise Log"
                        className =" btn btn-primary"/>
                        </div>
                    </form>
            </div>
        )
    }
}
