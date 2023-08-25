import React from 'react'
import MovieForm from '../MovieForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editMovieFromDatabase } from '../../manager/actions/movieActions';

const EditMovie = () => {
  const {id} = useParams();
  const movies = useSelector(p=>p);
  const selectMovie = movies.find(i=>i.id.toString() === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='editmovie '>
      <div className='container d-flex justify-content-center flex-column '>
        <h1 className='text-center my-5'>Edit Movie</h1>
        <MovieForm editmovie={selectMovie} sendData={(i)=>{
          dispatch(editMovieFromDatabase(selectMovie.id,i))
          navigate('/dashboard')
        }}/>
    </div>
    </div>
  )
}

export default EditMovie