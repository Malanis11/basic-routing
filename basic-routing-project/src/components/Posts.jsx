import axios from 'axios'
import { useEffect, useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/posts')
        .then(res => {
            const allPosts = res.data
            allPosts.map(post => {
                setPosts(prevPosts => [...prevPosts, post])
            })
        })
    }, [])

  return (
    <div className='container'>
        {posts.length > 0?
           <>
            <h1 className='page-title'>Posts</h1>   
            <div className="card-grid">
                {posts.map(post => {
                    return (
                        <div className="card" key={post.id}>
                            <div className="card-header">{post.title}</div>
                            <div className="card-body">
                                <div className="card-preview-text">{post.body}</div>
                            </div>
                            <div className="card-footer">
                                <a className='btn' href="#">View</a>
                            </div>
                        </div>
                    )
                })}  
                    
            </div>
            </>
        : 'No posts available' }        
    </div>
  )
}

export default Posts