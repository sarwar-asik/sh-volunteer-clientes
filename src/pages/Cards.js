import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleCards from "./SingleCards";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const [count, setCount] = useState(0);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  console.log(size);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`https://sh-volunteer-server.vercel.app/cards?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setCards(data.cards);
      });
  }, [size, page]);

  const deleteCard = (id) => {
    const isAgree = window.confirm("Do you want to delete ?");
    if (isAgree) {
      fetch(`https://sh-volunteer-server.vercel.app/cards/${id}`, {
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
      <h1 className=" mt-5 shadow-lg mb-3  text-center rounded-lg text-3xl max-w-md mx-auto py-5 font-medium bg-cyan-500 ">
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              page === number
                ? "bg-slate-600 m-1 p-2 rounded-3xl"
                : "bg-slate-200 m-1 p-2 rounded-2xl"
            }
          >
            {" "}
            {number}
          </button>
        ))}
        <span>Select Card </span>
        <select
          onChange={(event) => setSize(event.target.value)}
          name=""
          id=""
          className="bg-cyan-300 rounded-3xl p-3"
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </select>
      </h1>
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
