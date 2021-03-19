import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../redux/posts/postActions';
import './Form.css';

const initialPost = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  selectedFile: '',
};

function Form({ id, setId }) {
  const [post, setPost] = useState(initialPost);
  const data = useSelector(state =>
    id ? state.posts.find(message => message._id === id) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!id) {
      dispatch(createPost(post));
      clearForm();
    } else {
      dispatch(updatePost(id, post));
      clearForm();
    }
  };

  const clearForm = () => {
    setId(0);
    setPost(initialPost);
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="creator"
          placeholder="creator"
          value={post.creator}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={post.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={post.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tags"
          placeholder="tags"
          value={post.tags}
          onChange={handleChange}
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
        />
        <button type="submit">Submit</button>
        <button onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}

export default Form;
