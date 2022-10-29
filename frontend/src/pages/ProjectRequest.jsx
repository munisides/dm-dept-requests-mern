import React from "react";
import RequestForm from "../components/RequestForm/RequestForm";

const ProjectRequest = () => {
  return (
    <>
      <section className="heading">
        <h1>Request a Project</h1>
      </section>

      <section className="content">
        <p>Please complete the following form to request a project</p>
        <RequestForm />
      </section>
    </>
  );
};

export default ProjectRequest;
