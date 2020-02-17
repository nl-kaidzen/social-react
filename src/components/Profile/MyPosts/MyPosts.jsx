import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return (
      <Post message={post.message} author={post.author} key={post.id}/>
    );
  });
  
  return (
    <section>
      {postsElements}
    </section>
  );
}

export default MyPosts;