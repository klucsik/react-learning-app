import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

async function handleLogin(loginvalues) {
  let response = await fetch(
    "https://hovadobjam-test.herokuapp.com/api/login",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginvalues.username,
        password: loginvalues.password
      }),
      credentials: "include"
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
}

// Render Prop

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = "Email Required";
        }
        if (!values.password) {
          errors.password = "Password Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          handleLogin(values).then(data => {
            const errors = {};
            errors.login = data;
            alert(data.username);
            setSubmitting(false);
            return errors;
          });
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="username" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
