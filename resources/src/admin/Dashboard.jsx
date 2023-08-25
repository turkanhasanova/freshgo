import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeMovieFromDatabase } from '../manager/actions/movieActions'


const Dashboard = () => {
    const movies = useSelector(p=>p)
    const dispatch = useDispatch();
  return (
    <div className='dashboardcommon'>
      <div className='dashboard'>
      <div className='container'>
        <h1 className='text-center my-5'>Amin Panel</h1>
        <Link to='/dashboard/add'><button className='btn btn-success mb-4'>Add Movie</button></Link>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Rate</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {movies.map((item,count)=>(
            <tr key={count}>
      <th scope="row">{count+1}</th>
      <td><img src={item.image} alt="" width={50}/></td>
      <td>{item.title}</td>
      <td>{item.rate}</td>
      <td><Link to={`/dashboard/edit/${item.id}`}><button className='btn btn-warning'>Edit</button></Link></td>
      <td><button onClick={() =>{dispatch(removeMovieFromDatabase(item.id))}} className='btn btn-danger'>Delete</button></td>
    </tr>
    ))}

  </tbody>
</table>
    </div>
    </div> 
    </div>
    
  )
}

export default Dashboard