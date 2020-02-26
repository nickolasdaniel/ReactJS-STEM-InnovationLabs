import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedOut: false,
            username:"",
        }
        
        setTimeout(function(){
            const user = localStorage.getItem('user');
            console.log("HOMEPAGE", user);
            this.setState({username:user});
        }.bind(this), 0);
        
    }

    logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('pk')
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
                        <li><Link to='/profile'>Profile</Link></li>

                    </ul>
                </div>
                </nav>  
            </div>
        );
    }
}

export default Homepage;