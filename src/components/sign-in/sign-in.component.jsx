import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const initialForm = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = e => {
    e.preventDefault();
    setForm(initialForm);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={form.email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          type="password"
          name="password"
          value={form.password}
          required
          handleChange={handleChange}
          label="password"
        />

        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
