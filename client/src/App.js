import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './redux/posts/postActions';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import './App.css';

function App() {
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [id, dispatch]);

  const openForm = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="app">
      <Header openForm={openForm} />
      {open && <Form id={id} setId={setId} />}
      <Posts setId={setId} />
    </div>
  );
}

export default App;
