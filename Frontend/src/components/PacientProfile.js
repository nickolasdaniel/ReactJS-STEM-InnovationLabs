import React from 'react'
import axios from 'axios'
import Img from 'react-image'


class PacientProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: []
        }
        
    }


    fetchData = () => {
        const pk = localStorage.getItem('pk');
        const URL = `http://localhost:8081/profile_pacient/${pk}/`;
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

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     this.fetchData();
    // }

    fetchImage = (url) => {
        fetch(url)
            .then(response => {
                if (response.statusText === 'OK') {
                    return response;
                } else {
                    console.log("no image ")
                }
            })
    }

    componentDidMount() {
    this.fetchData();
    }
    
    //O ROMANEASCA CORESPUNZATOARE,,,,,,,,,,,,,,
    render() { 
        // let img = Object.values(this.state.fields.profile_picture).toString();

        return(
            <div className='profileWrapper'>
                
                <Img src={this.state.fields.profile_picture} />
                <p>STATE FIELDS TEST EMPTY FOR NOW</p>
                <p>{this.state.fields.profile_first_name}</p>
                <p>{this.state.fields.profile_last_name}</p>
                <p>{this.state.fields.caption}</p>
                <p>{this.state.fields.cnp}</p>
                <p>{this.state.fields.phone_number}</p>
                <Img src={this.state.fields.buletin_picture} />
                <Img src={this.state.fields.analize}/>
            
            </div>
        );
    }
}

export default PacientProfile;
