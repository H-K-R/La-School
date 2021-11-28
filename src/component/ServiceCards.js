import React from "react";

const ServiceCards = ({ services }) => {
  return (
    <div className="row g-4">
      {services.map((service, index) => (
        <div className="col-md-4" key={index}>
          <div className="card">
            <img
              src={service.imageUrl}
              className="card-img-top"
              alt={service.title}
            />
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
