import React from 'react';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const API = 'http://localhost:8000/products';

  function addProduct(newProduct){
    axios.post(API, newProduct);
  };


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <h2>Footer</h2>
    </BrowserRouter>
  )
}

export default App