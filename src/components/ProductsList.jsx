import React, { useEffect, useState } from 'react';
import { Button, Card } from  'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsList = ({ getProducts, products, deleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [hover, setHover] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container d-flex justify-content-between'>
      {products.map(item => (
        <Card
          key={item.id}
          onClick={() => setSelectedProduct(item.id)}
          onMouseEnter={() => setHover(item.id)}
          onMouseLeave={() => setHover('')}
          style={{
            width: '18rem',
            border: selectedProduct === item.id ? '2px solid black' : '',
            backgroundColor: hover === item.id ? 'grey' : 'white'
          }}
        >
          <Card.Img variant="top" src={item.image} width="200" height="200" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Link to={`/edit/${item.id}`}>
              <Button variant="warning">Edit</Button>
            </Link>
            <Link to={'/details/' + item.id}>
              <Button variant="success">Details</Button>
            </Link>
            <Button variant="danger" onClick={() => deleteProduct(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ProductsList
