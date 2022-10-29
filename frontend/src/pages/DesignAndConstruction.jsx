import React from "react";
import { Link } from "react-router-dom";

const DesignAndConstruction = () => {
  return (
    <>
      <section className="heading">
        <h1>Welcome to Design and Construction</h1>
      </section>

      <section className="content">
        <p>
          Design and Construction handles building designs and construction
          management
        </p>
        <button type="submit" className="btn btn-block">
          <Link to="/request">Project Request</Link>
        </button>
      </section>
    </>
  );
};

export default DesignAndConstruction;
