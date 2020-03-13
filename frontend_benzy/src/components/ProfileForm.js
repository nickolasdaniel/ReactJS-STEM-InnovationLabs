import React from 'react'
import {Redirect} from 'react-router-dom'
class ProfileForm extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    }
//profile_pacient
    render() {
        return(
            <div className='profileWrapper'>
                <form onSubmit={this.props.submitHandler}>

                    <label>First Name</label>
                    <input 
                        type='text' 
                        name='profile_first_name'
                        placeholder='Enter first name...'
                        onChange={this.props.changeHandler}
                    />

                    <label>Last Name</label>
                    <input 
                        type='text' 
                        name='profile_last_name'
                        placeholder='Enter last name...'
                        onChange={this.props.changeHandler}
                    />

                    <label>CNP</label>
                    <input 
                        type='text'
                        name='cnp'
                        placeholder='Enter CNP...'
                        onChange={this.props.changeHandler}
                    />

                    <label>Phone number</label>
                    <input
                        type='text'
                        name='phone_number'
                        placeholder='Enter phone number...'
                        onChange={this.props.changeHandler}
                    />

                    <label>Caption</label>
                    <input
                        type='text'
                        name='caption'
                        placeholder='Enter caption...'
                        onChange={this.props.changeHandler}
                    />

                    <label>Blood transfuzion</label>
                    <input
                        type='checkbox'
                        name='blood_transfuzion'
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

                    <label> Analize </label>
                    <input 
                        type='file' 
                        name='analize' 
                        onChange={this.props.imageChangeHandler}
                    />

                    <button type='submit'>Submit</button>
                    {this.props.isSuccessful ? <Redirect to='/pacient_profile' /> : null}
                </form>
            </div>
        );
    }
}

export default ProfileForm;