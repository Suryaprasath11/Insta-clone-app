import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Profile() {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4343/profile').then(data => {
      const firstProfile = Array.isArray(data.data) ? data.data[0] : data.data;
      setProfile(firstProfile);
    });
  }, []);
  
  function handleOnChange(e) {
    setProfile(prev => ({
      ...prev,
      [e.target.name ]: e.target.value 
    }))
  }
   async function handleUpdate() {
     axios.put(`http://localhost:4343/profile/${profile.id}`, profile)
       .then(data => console.log(data.data))
        .catch(err => console.log(err))
  }

  return (
    <div>
      {profile  ?
        (
          <div className='profile-container'>
            {/* {profile[0].img} */}
           <img src={profile.profilePic} className='profile-profile rounded-circle' />
            <h4 className='fw-bold'>{profile.username}</h4>

            <input
              type="text"
              value={profile.username}
              name="username"
              onChange={handleOnChange}
              className='form-control m-5 w-50'
            />

            <input
              type="text"
              value={profile.profilePic}
              name="profilePic"
              onChange={handleOnChange}
              className='form-control m-5 w-50'
            />
            <button className='btn btn-primary py-3 px-3'onClick={handleUpdate} > Update </button>

          </div>
        ) : (
          <div>
            loading 
        </div>
      )}
    </div>
  )
}

export default Profile