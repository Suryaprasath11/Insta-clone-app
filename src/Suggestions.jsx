// import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [profiles, setProfiles] = useState([]);
  // const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4343/profile')
      .then((r) => {
        return r.json()
      }).then((data) => {
        setProfiles(data)
      }).catch((err) => {
        console.log(err);
        
      })
  }, []);

  const sortedProfiles = profiles.slice(1,6);

  return (
    <div className='suggestionMain'>
      <div className='profile-container'>
            {/* {profile[0].img} */}
           <img src={sortedProfiles.profilePic} className='profile-profile rounded-circle' />
        <h4 className='fw-bold'>{sortedProfiles.username}</h4>
        </div>
      <div><p className='fw-semibold fs-5 mt-5 ms-3'>Suggestions for you</p><p className='seeall'>see all</p></div>
      {sortedProfiles.length > 0 ? (
        <div>
          {sortedProfiles.map((profile) => {
            return <div className='mb-3' key={profile.id}>
              <div className='suggestionbContainer mt-4 ms-3'>
                <img className='suggestionProilepic ' src={profile.profilePic } alt={profile.username} /><p className=" username">{profile.username}</p><br />
                <div className='followText ms-auto'>
                      <p className='fs-5 text-primary'>Follow</p>
                </div>
              </div>
              </div>
          })}
        </div>
        
      ) : (<div>varala</div>)}
    </div>
  );
}

export default Suggestions