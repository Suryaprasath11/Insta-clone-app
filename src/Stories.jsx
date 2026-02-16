import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function Stories() {

  const [storis, setStoris] = useState([]);
  const navigator = useNavigate();
  let tos = 0;
  useEffect(() => {
    fetch('http://localhost:4343/story')
      .then((r) => {
        return r.json()
      }).then((data) => {
        setStoris(data)
        // console.log(data);
      }).catch((err) => {
        console.log(err);
      })
  },[]);

  const sortedstories = storis.slice(0, 6);

  {tos = storis.length}
   return (
     <div className='story'>
      {sortedstories.length > 0 ? (
         <div className='d-flex gap-3 ms-3'>
          {sortedstories.map((story) => (
            <div className='' key={story.id}>
              <div className='gradient-border ms-1'>
              <img className='story-dp' src={story.profilePic} alt={story.username} onClick={() =>navigator(`/story/${story.id}/${tos}`)} />
              </div>
              <p className='text-truncate mt-1 ms-1' style={{width:'95px'}}>{story.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <div><Loader /></div>
      )}
    </div>
  );
}

export default Stories