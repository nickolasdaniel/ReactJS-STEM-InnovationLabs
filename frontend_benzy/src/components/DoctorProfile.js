import React from 'react';
import axios from 'axios';
import Img from 'react-image';

import styles from './CreateDoctorProfile.module.css';
import styless from './Singup.module.css';
import styles_login from './Login.module.css';

import cx from 'classnames';

import MetaTags from 'react-meta-tags';

import user from './user.png';
import news from './newspaper.png';
import calendar from './calendar.png';
import logout from './logout.png';
import photo from './photo.png';
import { Route, BrowserRouter as Router,Link,Redirect } from 'react-router-dom';

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

        console.log(URL)

        axios.get(URL)
            .then((response) => {

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
        // document.documentElement.style.backgroundImage = "src('components/spills.png')";
    return (
        <div className="singup">
            <MetaTags>
                <title>Meddoc</title>
                <meta charset="UTF-8"/>
                <meta name = "description" content = " "/>
                <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/>
                <meta http-equiv="refresh" content="500"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <div className={styless.menu_men}>
            <div className={styless.search_bar}>
		        <input className ={styless.search} type = "text" placeholder = "Search.." name = "search"/>
    	        <button className ={styless.search_button} type = "submit">Search</button>
		    </div>
                    <div className={styless.links}>
                        <Link to="/doctor_profile/" className={styless.profile_prof}><img className={styless.sell} src={user}/></Link>
                        <Link to="/news/" className={styless.profile_news}><img className={styless.news} src={news}/></Link>
                        <Link to="/calendar/" className={styless.profile_calendar}><img className={styless.calendar} src={calendar}/></Link>
                        <Link to="/login" className={styless.profile_logout}><img className={styless.logout} src={logout}/></Link>
        	        </div>
            </div>

            <div className = {styles.Container1}>
                <div className = {styles.Container22}>
                    <h1 className = {styless.headline}>Your profile</h1>
            </div>
            <div className = {styles.Container2d}>

            <h1 className = {styles.mid_lines}>Personal Details</h1>
                <div className = {styles.firstname_div_prof}>
                <label className = {styles.lastname_label_prof} for = "first-name">First name</label>
                <p>{this.state.fields.profile_first_name}</p>
            </div>

            <div className = {styles.lastname_div_prof}>
                <label className = {styles.lastname_label_prof} for = "last-name">Last name</label>
                <p>{this.state.fields.profile_last_name} </p>
            </div>

            <div className = {styles.id_div}>
                <label>Profile Picture</label>
                <Img className={styles.imag} src={this.state.fields.profile_picture} />
                </div>

            <div className = {styles.blood_div}>
            <label className={styles.do_you}>Sex</label>
            <p>{this.state.fields.sex}</p>
            </div>

            <div className = {styles.id_div}>
                <label>Photo of your ID card</label>
                <Img className={styles.imag} src={this.state.fields.buletin_picture} />
                </div>
            <div className = {styles.phonenr_div}>
                <label className = {styles.phonenr_label} for = "phonenr">Phone number</label>
                <p>{this.state.fields.phone_number}</p>
            </div>

            <div className = {styles.description_div}>
                <label className = {styles.description_label} for = "description">Details about your allergies, disorders, chronic illnesses, medicine you take etc.</label>
                <p>{this.state.fields.caption}</p>
	        </div>
            <h1 className = {styles.mid_lines}>Hospital</h1>

            <div className = {styles.pnc_div}>
                <label className = {styles.pnc_label} for = "pnc">Hospital</label>
                <p>{this.state.fields.hospital}</p>
            </div>
            <div className = {styles.pnc_div}>
                <label className = {styles.pnc_label} for = "pnc">Adress of Hospital</label>
                <p>{this.state.fields.adress_hospital}</p>
            </div>
        </div>
            <br/><br/><br/>
            <div className = {styles.Container2s}>
            <Link to="/create_doctor_profile"><button className = {cx(styless.button_sub,styles.buttons)} type = "submit">Edit Profile</button></Link>
              </div>
              <br/><br/><br/>
        </div>
            </div>
    );
    }
}

export default DoctorProfile;
