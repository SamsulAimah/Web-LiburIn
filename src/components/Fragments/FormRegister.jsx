import React from "react";
import MyButton from "../Elements/Button/index.jsx";
import InputForm from "../Elements/input/index.jsx";

const FormRegister = () => {
  return (
    <form action="" className="mb-4 space-y-2">
      <InputForm
        label="Full Name"
        name="full_name"
        placeholder="Your full name"
        type="text"
      />
      <InputForm
        label="Email"
        name="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <InputForm
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
      />
      <InputForm
        label="Confirm Password"
        name="confirm_password"
        placeholder="Confirm your password"
        type="password"
      />
      <MyButton
        text="Register"
        classname="bg-orange-500 w-full mt-3 hover:bg-orange-600 transition duration-200"
      />
    </form>
  );
};

export default FormRegister;
