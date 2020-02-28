import React from 'react'
import axios from 'axios'
// const pk = localStorage.getAll('pk');
const URL = 'http://localhost:8080/profile_pacient/19/';

class PacientProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        
    }

    

    fetchData = () => {
        const CONF = {
            mode: 'cors'
        }
        axios.get(URL, CONF)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.fetchData();
    }
    

    render() {
        return(
            <div className='profileWrapper'>
                <p>STATE FIELDS TEST EMPTY FOR NOW</p>      
            </div>
        );
    }
}

export default PacientProfile;