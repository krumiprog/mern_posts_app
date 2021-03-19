import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost, likePost } from '../../../redux/posts/postActions';
import { AiOutlineLike } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './Post.css';

function Post({ post, setId }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div
        className="card__header"
        style={{ backgroundImage: `url(${post.selectedFile})` }}
      >
        <div className="card__info">
          <div>{post.creator}</div>
          <div>{moment(post.createdAt).fromNow()}</div>
        </div>
      </div>
      <div className="card__body">
        <div className="card__mod">
          <div>{post.tags.map(tag => `#${tag} `)}</div>
          <button onClick={() => setId(post._id)}>click</button>
        </div>
        <h3>{post.title}</h3>
        <div className="card__message">{post.message}</div>
        <div className="card__footer">
          <button
            className="btn btn-like"
            onClick={() => dispatch(likePost(post._id))}
          >
            <div>
              <AiOutlineLike />
            </div>
            <div>{post.countLikes}</div>
          </button>
          <button
            className="btn btn-del"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
