import React from 'react'
import ProfileForm from './ProfileForm'
import axios from 'axios'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile_pacient: parseInt(localStorage.getItem('pk')),
            token: localStorage.getItem('token'),
            profile_first_name: '',
            profile_last_name: '',
            cnp: '',
            phone_number: '',
            caption: '',
            blood_transfuzion: true,
            profile_picture: null,
            buletin_picture: null,
            analize: null
        }

        console.log(this.state.profile_pacient)
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    // appendFormData = (event, data) => {
    //     const file = event.target.files[0]
    //     data.append(event.target.name, file)
    // }

    imageChangeHandler = (event) => {
        const file = event.target.files[0]
        this.setState({
            [event.target.name]: file
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const URL = 'http://localhost:8080/profile_pacient/'
        const data =  new FormData()
        const CONF = { 
            headers: {'Content-Type': 'multipart/form-data'} 
        }
        console.log(this.state)
        data.append('token',this.state.token)
        data.append('profile_pacient', this.state.profile_pacient)
        data.append('profile_first_name', this.state.profile_first_name)
        data.append('profile_last_name', this.state.profile_last_name)
        data.append('cnp', this.state.cnp)
        data.append('phone_number', this.state.phone_number)
        data.append('caption', this.state.caption)
        data.append('blood_transfuzion', this.state.blood_transfuzion)
        data.append('profile_picture', this.state.profile_picture)
        data.append('buletin_picture', this.state.buletin_picture)
        data.append('analize', this.state.analize)

        // this.appendFormData(event, DATA)
        // DATA.append(event.target.name, event.target.value)
        console.log(data.getAll('profile_pacient'))
        // this.appendFormData(event, data)
        // console.log(data)

        axios.post(URL, data, CONF)
            .then(response => {
                console.log(response);
                console.log(this.state)
            })
            .catch(errors => {
                console.log(errors);
            })
    }

    render() {
        return(
            <ProfileForm 
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                imageChangeHandler={this.imageChangeHandler}
            />
        );
    }
}

export default Profile;