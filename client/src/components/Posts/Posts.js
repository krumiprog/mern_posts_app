import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import './Posts.css';

function Posts({ setId }) {
  const posts = useSelector(state => state.posts);

  return (
    <div className="posts wrapper">
      {posts.map(post => (
        <Post key={post._id} post={post} setId={setId} />
      ))}
    </div>
  );
}

export default Posts;
