import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SingleCards = ({ card , deleteCard}) => {
  const { _id, title, img, datail, price } = card;

  
  



  return (
    <div>
      
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img} alt="Shoes" className="w-full" style={{'height':'300px'}} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">user</div>
          </h2>
          <p>{datail}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Update</div>
            <div onClick={()=>deleteCard(_id)} className="badge badge-outline">Delete</div>
          </div>
        </div>

        
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SingleCards;
