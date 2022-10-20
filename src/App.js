import React, { useState } from 'react';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const API = 'http://localhost:8000/products';
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  function addProduct(newProduct){
    axios.post(API, newProduct);
  };

  async function getProducts(){
    let res = await axios.get(API);
    setProducts(res.data);
  };

  async function getOneProduct(id){
    let res = await axios(`${API}/${id}`);
    console.log(res.data);
    setOneProduct(res.data);
  };

  async function updateProduct(id, editedProduct){
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  };

  async function deleteProduct(id){
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList getProducts={getProducts} products={products} deleteProduct={deleteProduct} />} />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<EditForm getOneProduct={getOneProduct} oneProduct={oneProduct} updateProduct={updateProduct} />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/details/:id" element={<Details getOneProduct={getOneProduct} oneProduct={oneProduct} />} />
      </Routes>
      <h2>Footer</h2>
    </BrowserRouter>
  )
}

export default App
