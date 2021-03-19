import axios from 'axios';
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from './actionTypes';
import { URL } from '../../config';

export const createPost = newPost => async dispatch => {
  try {
    const { data } = await axios.post(URL, newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, updatePost) => async dispatch => {
  try {
    const { data } = await axios.patch(`${URL}/${id}`, updatePost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`${URL}/${id}`);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchPosts = () => async dispatch => {
  try {
    const { data } = await axios.get(URL);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await axios.patch(`${URL}/${id}/like`);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
