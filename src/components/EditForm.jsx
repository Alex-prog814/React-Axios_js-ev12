import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({ getOneProduct, oneProduct, updateProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if(oneProduct){
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    };
  }, [oneProduct]);

  function saveChanges(){
    let editedObj = {
      title,
      price,
      image
    };
    updateProduct(id, editedObj);
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

      <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

      <input type="text" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />

      <Link to="/">
        <button onClick={saveChanges}>Save Changes</button>
      </Link>
    </div>
  )
}

export default EditForm