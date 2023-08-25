import React from 'react'
import MovieForm from '../MovieForm'
import { useDispatch } from 'react-redux'
import {  addMovieToDatabase } from '../../manager/actions/movieActions';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='addmovie2 '>
      <div className='container d-flex justify-content-center flex-column '>
        <h1 className='text-center my-5'>Add Movie</h1>
        <MovieForm sendData={(i) =>{
          dispatch(addMovieToDatabase(i))
          navigate('/dashboard')
        }} />
    </div>
    </div>
  )
}

export default AddMovie