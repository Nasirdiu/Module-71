import React from "react";

const InfoCard = ({ img,CardTitle,bgClass,CardBody }) => {
  return (
    <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{CardTitle}</h2>
        <p>{CardBody}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
