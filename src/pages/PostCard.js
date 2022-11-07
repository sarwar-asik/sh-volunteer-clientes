import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostCard = () => {
  const addCard = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.image.value;
    const datail = form.detail.value;
    const price = form.price.value;
    // console.log(title, img, datail, price);
    const card = {
      title,
      img,
      datail,
      price,
    };
    console.log(card);

    fetch("https://sh-volunteer-server.vercel.app/addCard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("added card");
        form.reset();
      });
  };

  return (
    <div className="max-w-2xl min-w-fit max-h-fit p-3 mx-auto my-4 shadow-2xl bg-cyan-700 rounded-3xl  ">
      <form onSubmit={addCard} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">
              Tittle
            </span>
          </label>
          <input
            type="title"
            name="title"
            placeholder="Card Title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">
              Image
            </span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Past Image Link"
            className="input input-bordered"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">
              Detail
            </span>
          </label>
          <input
            type="text"
            name="detail"
            placeholder="Write Details"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl font-bold text-white">
              Other Information
            </span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Other Info"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary bg-yellow-500 text-sky-100"
            type="submit"
            value="Add Card"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PostCard;
