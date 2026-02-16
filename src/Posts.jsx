import React, { useEffect, useState } from 'react'
import Loader from './Loader';

function Posts() {

    const [posts, setPosts] = useState([]);
    // const handelLike = () => {}

    useEffect(() => {
        fetch('http://localhost:4343/posts').then((response) => {
            return response.json()
        }).then((data) => {
            setPosts(data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            {posts.length > 0 ? (
                <div className="postcontainer">
                    {/* Posts in Feed */}
                    {posts.map((post) => (
                        <div className='mb-3' key={post.id}>
                            <div className='post-top-section'>
                                <img className='proilepic' src={post.user_img} alt={post.user} /><p className=" username">{post.user}</p><br />
                            </div>
                                <div className='timestamp'>
                                    <p>{post.time}</p>
                                </div>
                            <div>
                                {/* . */}
                                <img className='postpictuer' src={post.image} alt={post.user} />
                            </div>
                            
                            <div className='post-bottom-section d-flex'>
                                <i className='bi bi-heart'></i>
                                <i className='bi bi-chat'></i>
                                <i className='bi bi-send'></i>
                            </div>
                            <div className='d-flex gap-1'>
                                <p className='likes-text'><strong className='fs-6 mx-1'>{post.likes}</strong>Liked</p>
                                <p className='likes-text'><strong className='fs-6 mx-1'>{post.comments_count}</strong>Commented</p>
                            </div>
                            <div>
                                <p className='caption'>{post.caption}</p>
                            </div>
                        </div>
                    ))}
                    {/* {console.log(posts)}; */}
                </div>
            ) : (
                <Loader />
            )}
        </div>
  )
}

export default Posts