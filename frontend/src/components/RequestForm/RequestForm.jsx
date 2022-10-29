import React from "react";
import { Formik, Form, Field } from "formik";
import "./style.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

let renderCount = 0;

const validateUserName = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateName = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePhoneNumber = (value) => {
  let error;
  if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

// const validatePassword = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   }
//   return error;
// };

// const validateDateOfBirth = (value) => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (
//     !/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i.test(
//       value
//     )
//   ) {
//     error = "Please use the following format MM/DD/YYYY";
//   }
//   return error;
// };

const RequestForm = () => {
  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        phonenumber: "",
        email: "",
        dept: "",
        location: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          {console.log("rendering...", ++renderCount)}
          <br />
          <div className="col-sm-12">
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Frst Name"
                  name="fname"
                  validate={validateUserName}
                />
                {errors.fname &&
                  touched.fname &&
                  errorMessage(errors.fname)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  validate={validateName}
                />
                {errors.lname &&
                  touched.lname &&
                  errorMessage(errors.lname)}
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.email &&
                  touched.email &&
                    errorMessage(errors.email)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="tel"
                  placeholder="Phone Number"
                  name="phonenumber"
                  validate={validatePhoneNumber}
                />
                {errors.phonenumber &&
                  touched.phonenumber &&
                  errorMessage(errors.phonenumber)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Your Department"
                  name="dept"
                  validate={errors.dept}
                />
                {errors.dept &&
                  touched.dept &&
                  errorMessage(errors.dept)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Project Building location"
                  name="location"
                  validate={errors.location}
                />
                {errors.location &&
                  touched.location &&
                  errorMessage(errors.location)}
              </div>
              <div className="form-group">
                <Field
                  component="textarea"
                  placeholder="Project description"
                  className="form-control"
                  name="Description"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RequestForm;
