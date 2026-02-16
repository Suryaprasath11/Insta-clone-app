import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ViewStory() {

  const { id,tos } = useParams();

  const navigator = useNavigate();
  
  const [stories, setStories] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:4343/story/${id}`)
          .then((r) => {
              return r.json()
          }).then((data) => {
            // console.log(data);
            setStories(data);
          });
    }, [id])
  
  // tos = stories.length
  // console.log(`no.of.stories - ${tos}`);
  
    
  if (Number(id) >Number(tos) || Number(id) <=0) {
    navigator('/')
  }

  return (
    <div>
      {stories ? (
        <div>
           <div className='d-flex justify-content-center align-items-center'>
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tos}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
            <img className='storyImage ' src={stories.storyImage} alt={stories.username} />
            <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tos}`} ><i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>
          </div> 
          <div className='inner-story-dp d-flex gap-3'>
                <img className='n-story-dp ' src={stories.profilePic} alt={stories.username}/>
                <p className='mt-2 fw-bold ms-1 fs-5 text-white' style={{width:'95px'}}>{stories.username}</p>
        </div>
      </div>) : (
          <div>
            no story
          </div>
      )}
    </div>
  )
}

export default ViewStory