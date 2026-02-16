import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideBar() {


const navigator = useNavigate()
  

  return (
      <div className='m-5 fs-5 '>
          <div className='position-fixed d-flex flex-column gap-4 sidebar-i'>
              <img className='logo-text' src="src/assets/wordings.png" alt="" />
              <div><i className="bi bi-house-door"></i>Home</div>
              <div><i className="bi bi-search"></i>Search</div>
              <div><i className="bi bi-compass"></i>Explore</div>
              <div><i className="bi bi-film"></i>Reels</div>
              <div><i className="bi bi-chat-dots"></i>Messages</div>
              <div><i className="bi bi-heart"></i>Notification</div>
              <div><i className="bi bi-plus-square"></i>Create</div>
              <div onClick={()=> navigator('/profile')}><i className="bi bi-person-circle"></i>Profile</div>
              <div className='position-fixed d-flex flex-column gap-3 mb-4 bottom-0'>
                  <div><i className="bi bi-threads"></i>Threads</div>
                  <div><i className="bi bi-list"></i>More</div>
              </div>
        </div>
      </div>
  )
}

export default SideBar