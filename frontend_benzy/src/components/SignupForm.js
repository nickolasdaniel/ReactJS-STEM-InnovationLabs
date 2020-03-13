import React from 'react';
import styles from './Singup.module.css';
import struct from './structure.jpg';
import MetaTags from 'react-meta-tags';
import user from './user.png';
import news from './newspaper.png';
import calendar from './calendar.png';
import logout from './logout.png';
import { Route, BrowserRouter as Router,Link,Redirect } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
    return (
        <div className={styles.singup}>
            <MetaTags>
                <title>Meddoc</title>
                <meta name = "description" content = " "/>
                <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <form onSubmit={this.props.submitHandler}>
            <div className={styles.menu_men}>
                <div className={styles.search_bar}>
		            <input className ={styles.search} type = "text" placeholder = "Search.."/>
    	            <button className ={styles.search_button} type = "submit">Search</button>
		        </div>
                    <div className={styles.links}>
                        <Link to="/pacient_profile/" className={styles.profile_prof}><img className={styles.sell} src={user}/></Link>
                        <Link to="/news/" className={styles.profile_news}><img className={styles.news} src={news}/></Link>
                        <Link to="/calendar/" className={styles.profile_calendar}><img className={styles.calendar} src={calendar}/></Link>
                        <Link to="/" className={styles.profile_logout}><img className={styles.logout} src={logout}/></Link>
        	        </div>
            </div>
            <div className={styles.Container1}>
        <div className = {styles.Container2}>
            <h1 className = {styles.headline}> Create an account </h1>
        </div>
        <div className = {styles.Container2}>
            <label className={styles.med}>
             <input className={styles.checkbox} type="checkbox" onChange={this.props.changeHandler}  name="is_pacient"/>
             <span className={styles.pacient}>Pacient</span>
              </label>
              <label className={styles.med}>
             <input className={styles.checkbox} type="checkbox" onChange={this.props.changeHandler}  name="is_doctor"/>
             <span className={styles.doctor}>Doctor</span>
             </label>
            <div className = {styles.ContainerL}>
                <div className = {styles.firstname_div}>
                    <label className = {styles.firstname_label}>First Name</label>
                    <input className = {styles.firstname_input} type = "text" placeholder = "Enter First Name" name = "first_name" onChange={this.props.changeHandler} />
                </div>
                <div className = {styles.lastname_div}>
                    <label className = {styles.lastname_label}>Last Name</label>
                    <input className = {styles.lastname_input} type = "text" placeholder = "Enter Last Name" name = "last_name" onChange={this.props.changeHandler} />
                </div>
                <div className = {styles.email_div}>
                    <label className = {styles.email_label}>Enter your email</label>
                    <input className = {styles.email_input} type = "text" placeholder = "Enter your email adress" name = "email" onChange={this.props.changeHandler} />
                </div>
            </div>
	        <div className = {styles.ContainerR}>
                <div className = {styles.confirmemail_div}>
                    <label className = {styles.confirmpassword_label}>Confirm your email address</label>
                    <input className = {styles.confirmemail_input} type = "text" placeholder = "Re-enter your email" name = "email_confirmation" onChange={this.props.changeHandler} />
                </div>
                <div className = {styles.password_div}>
                    <label className = {styles.password_label}>Password</label>
                    <input className = {styles.password_input} type = "password" placeholder = "Enter your password" name = "password" onChange={this.props.changeHandler} />
                </div>
                <div className = {styles.confirmpassword_div}>
                    <label className = {styles.confirmpassword_label}>Confirm password</label>
                    <input className = {styles.confirmpassword_input} type = "password" placeholder = "Re-enter password" name = "password_confirmation" onChange={this.props.changeHandler}/>
                </div>
            </div>
      </div>
      <div className = {styles.Container_sub}>
            <button className = {styles.button_sub}  type="submit">Sign In</button>
              {this.props.isSuccessful ? <Redirect to='/' /> : null}
      </div>
            </div>
            </form>
      </div>
    );
  }
}

export default SignupForm;
