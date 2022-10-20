import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({ getOneProduct, oneProduct }) => {
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if(loading){
    return <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  };

  return (
    <div className='container'>
      {oneProduct ? (
        <>
          <img src={oneProduct.image} alt="" width="350" height="350" />
          <h3>{oneProduct.title}</h3>
          <h3>{oneProduct.price}</h3>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}

export default Details