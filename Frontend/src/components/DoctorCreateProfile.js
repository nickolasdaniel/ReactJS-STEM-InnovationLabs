import React from 'react'
import DoctorCreateProfileForm from './DoctorCreateProfileForm'
import axios from 'axios'

class DoctorCreateProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile_doctor: parseInt(localStorage.getItem('pk')),
            token: localStorage.getItem('token'),
            profile_first_name: '',
            profile_last_name: '',
            hospital: '',
            adress_hospital: '',
            phone_number: '',
            caption: '',
            profile_picture: null,
            buletin_picture: null,
            isSuccessful: false
        }

        console.log(this.state)
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    appendFormData = (data) => {
        let keys = Object.keys(this.state);
        for(const key of keys){
            data.append(key, this.state[key]);
        }
    }
    
    displayFormData = (data) => {
        let keys = Object.keys(this.state);
        for(const key of keys){
            console.log("DATA FORM" + " " + data.getAll(key))
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const URL = 'http://localhost:8000/profile_doctor/'
        const data =  new FormData()
        const CONF = { 
            headers: {'Content-Type': 'multipart/form-data'} 
        }
        console.log(this.state)

        this.appendFormData(data);
        this.displayFormData(data);

        axios.post(URL, data, CONF)
            .then(response => {
                console.log(response);
                this.setState({isSuccessful: true})
                console.log(this.state)
            })
            .catch(errors => {
                console.log(errors);
            })
    }

    imageChangeHandler = (event) => {
        const file = event.target.files[0]
        this.setState({
            [event.target.name]: file
        });
    }


    render() {
        return(
            <DoctorCreateProfileForm
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                imageChangeHandler={this.imageChangeHandler}
                isSuccessful={this.state.isSuccessful}
            />
        )

    }
}

export default DoctorCreateProfile;