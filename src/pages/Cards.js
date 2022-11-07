import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleCards from "./SingleCards";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://sh-volunteer-server.vercel.app/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


  const deleteCard = (id) => {
    const isAgree = window.confirm("Do you want to delete ?");
    if (isAgree) {
      fetch(`http://localhost:5000/cards/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("deleted");
            const remaining = cards.filter((cr) => cr._id !== id);
            setCards(remaining);
          }
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1>There are are Card {cards.length} </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        {cards.map((card) => (
          <SingleCards
            key={card._id}
            card={card}
            deleteCard={deleteCard}
          ></SingleCards>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cards;
