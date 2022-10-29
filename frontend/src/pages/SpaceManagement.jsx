import React from "react";
import { Link } from "react-router-dom";

const DesignAndConstruction = () => {
  return (
    <>
      <section className="heading">
        <h1>Welcome to Space Management</h1>
      </section>

      <section className="content">
        <p>Space Management handles building space allocation.</p>
        <button type="submit" className="btn btn-block">
          <Link to="/request">Project Request</Link>
        </button>
      </section>
    </>
  );
};

export default DesignAndConstruction;
