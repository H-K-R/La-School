import React, { useEffect, useState } from "react";

import ServiceCards from "../component/ServiceCards";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((result) => result.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="container py-5">
        <ServiceCards services={services} />
      </div>
    </div>
  );
};

export default Services;
