import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedOut: false,
            username:'',
            pk: null,
            url: '',
            created: false,
            is_doctor: '',
            is_pacient: ''
        }
        
        setTimeout(function(){
            const user = localStorage.getItem('user');
            const pk = localStorage.getItem('pk');
            const is_pacient = localStorage.getItem('is_pacient');
            const is_doctor = localStorage.getItem('is_doctor');
            // console.log('TIMEOUT PK' + pk);
            // console.log("HOMEPAGE", user);
            this.setState({username:user});
            this.setState({pk: pk});
            this.setState({is_doctor: is_doctor})
            this.setState({is_pacient: is_pacient})
            this.checkDocPacURL();
            this.checkIfProfileIsCreated(this.state.url)
            console.log(this.state)
        }.bind(this), 0);
        
    }

    checkDocPacURL = () => {
        if(this.state.is_pacient === 'true') {
            this.setState({url: `http://localhost:8000/profile_pacient/${this.state.pk}/`})
            console.log('MERGE')
        } else {
            this.setState({url: `http://localhost:8000/profile_doctor/${this.state.pk}/`})
            console.log('NE')
        }
    }

    checkIfProfileIsCreated = (url) => {

        console.log(url)
        axios.get(url)
            .then((response) => {
                if(response.data){
                    // return <Redirect to='/pacient_profile' />
                    this.setState({created: true})
                    console.log(this.state)
                    console.log("FACE REQUEST")
                }
            })
            .catch(error => {
                console.log(error);
                console.log("NU ESTE PROFIL")
            })
    }

    linkToDocORPac = () => {
        if(this.state.is_pacient === 'true') {
            return this.state.created ? '/pacient_profile' : '/profile'
        } else if(this.state.is_doctor === 'true') {
            return this.state.created ? '/doctor_profile_page' : '/doctor_profile_create'
        }
    }

    // componentDidMount() {
    //     this.checkDocPacURL();
    //     this.checkIfProfileIsCreated(this.state.url)
    // }

    logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('pk')
        localStorage.removeItem('is_pacient')
        localStorage.removeItem('is_doctor')
        this.setState({isLoggedOut: true})
    }

    render() {
        return(
            <div className='homepageWrapper'>
                <button onClick={this.logoutUser}>Log out</button>
                {this.state.isLoggedOut ? <Redirect to='/' /> : null}
                <nav className="navbar"> 
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#">Buna ziua domnule/doamna {this.state.username}</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li><Link to={this.linkToDocORPac}>Profile</Link></li> 
                    </ul>
                </div>
                </nav>  
            </div>
        );
    }
}

export default Homepage;
