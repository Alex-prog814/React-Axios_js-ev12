import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  function createProduct(){
    if(!title || !price || !image){
      alert('Some inputs are empty!');
      return;
    };
    let newProduct = {
      title,
      price,
      image
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

      <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

      <input type="text" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />

      <Link to="/">
        <button onClick={createProduct}>Save</button>
      </Link>
    </div>
  )
}

export default AddForm