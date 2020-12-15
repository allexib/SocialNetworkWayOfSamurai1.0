import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
    <img src='https://vk-free-stickers.ru/wp-content/uploads/2020/07/mudakot_ava.jpg' />
         { props.message }
          <div>
      <span>like</span> { props.likesCount }
    </div>
   </div>
  )
}

export default Post;