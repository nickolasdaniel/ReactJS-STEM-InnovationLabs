import React from 'react'
import axios from 'axios'
import Img from 'react-image'

class DoctorProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: []
        }
    }

    fetchData = () => {
        const pk = localStorage.getItem('pk');
        const URL = `http://localhost:8000/profile_doctor/${pk}/`;
        // const CONF = {
        //     mode: 'cors'
        // }
        console.log(URL)
        axios.get(URL)
            .then((response) => {
                // this.dataToState(response.data)
                
                this.setState({fields: response.data})
                console.log(this.state)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <div className='doctorProfileWrapper'>
                <h1> DoctorProfile </h1>
                <Img src={this.state.fields.profile_picture} />
                <p>{this.state.fields.profile_first_name}</p>
                <p>{this.state.fields.profile_last_name}</p>
                <p>{this.state.fields.hospital}</p>
                <p>{this.state.fields.address_hospital}</p>
                <p>{this.state.fields.phone_number}</p>
                <Img src={this.state.fields.buletin_picture} />
                <Img src={this.state.fields.analize}/>
            </div>
        );
    }
}

export default DoctorProfile;