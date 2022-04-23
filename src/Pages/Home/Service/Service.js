import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h3>This is service: {name}</h3>
      <p>Price: {price}</p>
      <p>
        <small>Description: {description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn-primary"
      >
        Book : {name}
      </button>
    </div>
  );
};

export default Service;
