import React from 'react'
import {Redirect} from 'react-router-dom'

class DoctorCreateProfileForm extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return(
            <div className='doctorCreateWrapper'>
                <form onSubmit={this.props.submitHandler}>

                    <label> First Name </label>
                    <input
                        type='text'
                        name='profile_first_name'
                        onChange={this.props.changeHandler}
                    />

                    <label> Last Name </label>
                    <input
                        type='text'
                        name='profile_last_name'
                        onChange={this.props.changeHandler}
                    />

                    <label> Hospital </label>
                    <input
                        type='text'
                        name='hospital'
                        onChange={this.props.changeHandler}
                    />

                    <label> Hospital address </label>
                    <input
                        type='text'
                        name='address_hospital'
                        onChange={this.props.changeHandler}
                    />

                    <label> Phone number </label>
                    <input
                        type='text'
                        name='phone_number'
                        onChange={this.props.changeHandler}
                    />

                    <label> Choose profile picture </label>
                    <input 
                        type='file' 
                        name='profile_picture' 
                        onChange={this.props.imageChangeHandler}
                    />

                    <label> Buletin picture </label>
                    <input 
                        type='file' 
                        name='buletin_picture' 
                        onChange={this.props.imageChangeHandler}
                    />

                    <button type='submit'> Submit </button>
                    
                    {this.props.isSuccessful ? <Redirect to='/doctor_profile_page' /> : null}
                </form>
            </div>  
          );
    }
}

export default DoctorCreateProfileForm;