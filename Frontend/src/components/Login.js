import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';



class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLogged: false
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
        // console.log(this.state)
    }

    validLogin = async (fields) => {
        if(fields.data.token) {
            this.setState({isLogged: true});
            localStorage.setItem('token', fields.data.token);
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const url = 'http://192.168.100.11:8081/login/';
        axios.post(url, this.state)
            .then(response => {
                console.log("LOGIN RESOPONSE" + " " + response.data.pacient);
                this.validLogin(response);
                localStorage.setItem('user', response.data.user);
                localStorage.setItem('pk', response.data.pk);
                localStorage.setItem('is_pacient', response.data.pacient)
                localStorage.setItem('is_doctor', response.data.doctor)
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        return(
            <div className="wrapper">
                <LoginForm 
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    email={this.state.email}
                    password={this.state.password}
                    isLogged={this.state.isLogged}
                />
            </div>
        );
    }
}

export default Login;
