import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';
import PlanScreen from './PlanScreen';



function ProfileScreen() {
    const user = useSelector(selectUser)

  return (
    <div className='ProfileScreen'>
    <Nav />
    <div className="ProfileScreen_body">
        <h1>Edit Profile</h1> 
        <div className="ProfileScreen_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            <div className="ProfileScreen_details">
                <h2>{user.email}</h2>
                <div className="ProfileScreen_plans">
                    <h3>Plans</h3>

                    <PlanScreen />
                </div>
                <button onClick={() => auth.signOut()} className='ProfileScreen_signOut'>Sign Out</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileScreen
