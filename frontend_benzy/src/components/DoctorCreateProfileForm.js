import React from 'react'
import {  Route,BrowserRouter as Router,Link,Redirect } from 'react-router-dom';

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
import id from './name.png';

class DoctorCreateProfileForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

//     render() {
//         return(
//             <div className='doctorCreateWrapper'>
//                 <form onSubmit={this.props.submitHandler}>
//
//                     <label> First Name </label>
//                     <input
//                         type='text'
//                         name='profile_first_name'
//                         onChange={this.props.changeHandler}
//                     />
//
//                     <label> Last Name </label>
//                     <input
//                         type='text'
//                         name='profile_last_name'
//                         onChange={this.props.changeHandler}
//                     />
//
//                     <label> Hospital </label>
//                     <input
//                         type='text'
//                         name='hospital'
//                         onChange={this.props.changeHandler}
//                     />
//
//                     <label> Hospital address </label>
//                     <input
//                         type='text'
//                         name='address_hospital'
//                         onChange={this.props.changeHandler}
//                     />
//
//                     <label> Phone number </label>
//                     <input
//                         type='text'
//                         name='phone_number'
//                         onChange={this.props.changeHandler}
//                     />
//
//                     <label> Choose profile picture </label>
//                     <input
//                         type='file'
//                         name='profile_picture'
//                         onChange={this.props.imageChangeHandler}
//                     />
//
//                     <label> Buletin picture </label>
//                     <input
//                         type='file'
//                         name='buletin_picture'
//                         onChange={this.props.imageChangeHandler}
//                     />
//
//                     <button type='submit'> Submit </button>
//
//                     {this.props.isSuccessful ? <Redirect to='/doctor_profile_page' /> : null}
//                 </form>
//             </div>
//           );
//     }
// }
        render() {
            // document.documentElement.style.backgroundImage = "src('components/spills.png')";
              return (
                  <div className="singup">
                      <MetaTags>
                          <title>Meddoc</title>
                          <meta name = "description" content = " "/>
                          <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                          <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/>
                          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                      </MetaTags>
                      <form onSubmit={this.props.submitHandler}>

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
                              <h1 className = {styless.headline}>Create your profile</h1>
                      </div>
                      <div className = {styles.Container2d}>

                      <h1 className = {styles.mid_lines}>Personal Details</h1>
                          <div className = {styles.firstname_div_prof}>
                              <label className = {styles.firstname_label_prof}>First name</label>
                              <input className = {styles.firstname_input_prof} type = "text" placeholder = "Enter first name" name = "profile_first_name" onChange={this.props.changeHandler}/>
                      </div>

                      <div className = {styles.lastname_div_prof}>
                          <label className = {styles.lastname_label_prof}>Last name</label>
                          <input className = {styles.lastname_input_prof} type = "text" placeholder = "Enter last name" name = "profile_last_name" onChange={this.props.changeHandler}/>
                      </div>

                      <div className = {styles.blood_div}>
                      <label className={styles.do_you}>Sex</label>
                          <label className={cx(styles.blood_label,styles_login.rememberme)}>
                              <select className={styles.sex} id="sex" name="sex" onChange={this.props.changeHandler}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other"> Prefer not to say...</option>
                              </select>
                          </label>
                      </div>

                      <div className = {styles.id_div}>
                          <label>Profile photo</label>
                              <label className={styles.labels}>
                                  <input className = {styles.id_input} type = "file" name = "buletin_picture" onChange={this.props.imageChangeHandler}/>
                                  <span className = {styles.id_label}><img className={styles.photo_img} src={photo}></img><p className={styles.choose_photo}>Choose a photo..</p></span>
                              </label>
                          </div>

                      <label className = {styles.phonenr_label}>Phone number</label>
                          <div className = {styles.phonenr_div}>
                          <input className = {styles.phonenr_input} type = "text" placeholder = "Enter phone number" name = "phone_number" onChange={this.props.changeHandler}/>
                      </div>

                      <div className = {styles.id_div}>
                          <label>Photo of your ID card</label>
                              <label className={styles.labels}>
                                  <input className = {styles.id_input} type = "file" name = "profile_picture" onChange={this.props.imageChangeHandler}/>
                                  <span className = {styles.id_label}><img className={styles.photo_img} src={id}></img><p className={styles.choose_photo}>Choose a photo..</p></span>
                              </label>
                          </div>

                      <div className = {styles.description_div}>
                          <label className = {styles.description_label}>Details about your allergies, disorders, chronic illnesses, medicine you take etc.</label>
                          <input className = {styles.description_input} type = "text" placeholder = "Description" name = "caption" onChange={this.props.changeHandler}/>
                    </div>
                      <h1 className = {styles.mid_lines}>Hospital</h1>

                      <div className = {styles.pnc_div}>
                          <label className = {styles.pnc_label}>Hospital</label>
                          <input className = {styles.pnc_input} type = "text" placeholder = "Enter hospital" name = "hospital" onChange={this.props.changeHandler}/>
                      </div>
                      <div className = {styles.pnc_div}>
                          <label className = {styles.pnc_label}>Adress of Hospital</label>
                          <input className = {styles.pnc_input} type = "text" placeholder = "Enter address of hospital" name = "adress_hospital" onChange={this.props.changeHandler}/>
                      </div>
                  </div>
                      <br/><br/><br/>
                      <div className = {styles.Container2s}>
                      <button className = {cx(styless.button_sub,styles.buttons)} type = "submit">Submit changes</button>
                      {this.props.isSuccessful ? <Redirect to='/doctor_profile_page' /> : null}
                        </div>
                        <br/><br/><br/>

                  </div>
                  </form>

                      </div>
              );
        }
}
export default DoctorCreateProfileForm;
