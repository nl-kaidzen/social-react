import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <section>My posts
      <Post message="Hey guys concerning the functionnalities it looks ok for me, but on the integration there are some finetune that need to be done. expecially on the breadcrumb but this is not the final design so i think Andrei will finetune this a little bit later ^^" author="Julien Nguen"/>
      <Post message="React are awesome!" author="Andrei Khabarow"/>
			<Post message="Hello, this is my first post!" author="Andrei Khabarow"/>
    </section>
  );
}

export default MyPosts;