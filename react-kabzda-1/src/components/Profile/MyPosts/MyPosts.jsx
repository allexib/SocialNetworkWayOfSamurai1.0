import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hi nigga how a y', likesCount: 18},
        {id: 2, message: 'hi nigga how a y', likesCount: 16},
        {id: 3, message: 'qq niga', likesCount: 12},
        {id: 4, message: 'it is my first post', likesCount: 11}
    ]

    let postsElements =
        posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;