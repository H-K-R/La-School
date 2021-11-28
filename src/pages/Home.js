import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCards from "../component/ServiceCards";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((result) => result.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);

  return (
    <div className="home">
      <div className="hero py-5 d-flex align-items-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-white">
            Gathering the brightest <br /> minds for a{" "}
            <span className="text-danger">better-world.</span>
          </h1>
          <Link to="/services">
            <button className="btn btn-danger mt-3">
              Checkout Our Services
            </button>
          </Link>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <h2 className="h1 mb-5">Check out Learning Categories</h2>
          <ServiceCards services={services} />
        </div>
      </section>

      <section className="bg-light p-5 container mb-4">
        <h2>Non-Stop Learning Today, Get Started to Develop New Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint
          minus. Facere, hic cupiditate perferendis libero ipsum, mollitia,
          tenetur dolorem sunt impedit dolore odit minima.
        </p>
        <Link to="/services">
          <button className="btn btn-info">See our Service Categories</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
