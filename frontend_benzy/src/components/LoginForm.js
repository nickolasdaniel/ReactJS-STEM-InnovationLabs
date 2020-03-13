import React from 'react'
import axios from 'axios'

import styles from './Login.module.css';

import cx from 'classnames';
import MetaTags from 'react-meta-tags';
import meddoc from './meddoc.png';

import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     email: '',
        //     password: '',
        //     isLogged: ''
        // }
        console.log(this.props)
    }


//     render() {
//         return(
//             <div className="main-div">
//                 <div className="header">
//                     <h1> Login </h1>
//                     <p>
//                         Don't you already have an account?
//                         <Link to='/signup' >Sign Up</Link>
//                     </p>
//                 </div>
//                 <div className="credentials">
//                     <form onSubmit={this.props.submitHandler}>
//                         <label>Email</label>
//                         <input type="text" name="email" /*value={this.props.email}*/ onChange={this.props.changeHandler} />
//                         <label>Password</label>
//                         <input type="password" name="password" /*value={this.props.password}*/ onChange={this.props.changeHandler} />
//                         <button type="submit"> Submit </button>
//                     </form>
//                 </div>
//                 {this.props.isLogged ? <Redirect to={{
//                     pathname: '/homepage',
//                     }}
//                     /> : null}
//             </div>
//         );
//     }
// }
      render() {
            return (
                <div className={styles.aa}>
                  {/* <Router>s */}
                    <MetaTags>
                        <title>Meddoc</title>
                        <meta name = "description" content = " "/>
                        <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                        <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    </MetaTags>

                    <form onSubmit={this.props.submitHandler}>
                <div className = {styles.Container1}>
                <div className = {styles.Container2}>
                    <img className ={styles.meddoc_img} src={meddoc}/>
                      <h1 className={styles.headline}></h1>
                    <p className={styles.nuaidejacont}>Dont you have an account?<Link to="/signup" className="--forgotpass">Sign up</Link></p>
                </div>
                  <div className ={cx(styles.Container3,styles.em)}>
                    <label className = {styles.pass}>E-mail</label>
                  <input className={styles.email} type = "text" placeholder = "Enter E-mail" name = "email" onChange={this.props.changeHandler} required/>
                  </div>
                  <div className = {cx(styles.Container3,styles.ps)}>
                    <label className = {styles.pass}>Password</label>
                  <input className={styles.password} type = "password" placeholder = "Enter Password" name = "password" onChange={this.props.changeHandler} required/>
                  </div>
                  <div className={styles.left}>
                  <label className={styles.rememberme}>
                      <p className={styles.rememb}>Remember me</p>
                      <input type="checkbox" name="checkbox"/>
                      <span className={styles.checkmark}></span>
                  </label>
                  </div>
                  <div className={styles.right}>
                  <p className={styles.forgotpass2}><Link to="/password-reset" className={styles.forgotpas2s}>Forgot password?</Link></p>
                  </div>
                <div className={styles.as}>
                    <button className={styles.submit} type = "submit">Login</button>
                </div>

              </div>
              </form>
              {this.props.isLogged ? <Redirect to={{
                                  pathname: '/homepage',
                                  }}
                                  /> : null}
              </div>
            );
      }
}

export default LoginForm;
