import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from'react';


const MovieForm = ({sendData,editmovie}) => {
  const [photo, setPhoto] = useState(editmovie  ? editmovie.image :"");
  const [title, setTitle] = useState(editmovie  ? editmovie.title :"");
  const [genre, setPrice] = useState(editmovie  ? editmovie.genre :"");
  const [rate, setRate] = useState(editmovie  ? editmovie.rate :"");
  const movieFormSubmit =e=>{
    e.preventDefault();
    sendData({
      image:photo,
      title:title,
      genre:genre,
      rate:rate
    })
  }
  return (
    <div className='addmovie'>
      <Form onSubmit={movieFormSubmit}>
      
      <Form.Group className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control value={photo} onChange={e=>setPhoto(e.target.value)} type="text" placeholder="Enter photo url" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control value={genre} onChange={e=>setPrice(e.target.value)} type="text" placeholder="Enter genre" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control value={rate} onChange={e=>setRate(e.target.value)} type="text" placeholder="Enter rate" />
      </Form.Group>

      <Button variant="primary" type="submit">
        {editmovie ? "Edit" : "Add" }
      </Button>
    </Form>
    </div>
  )
}

export default MovieForm;