import React from "react";
import MyButton from "../Elements/Button/index.jsx";
import InputForm from "../Elements/input/index.jsx";
const FromLogin = () => {
    return (
        <form action="">
        <InputForm  label="Email" name="email" placeholder="Exemple@gmail.com" type="email" />
        <InputForm  label="Password" name="password" placeholder="Password" type="password" />
      <MyButton text="Login" classname="bg-orange-500 w-full mt-4 hover:bg-orange-600" />
      </form>
    );
};

export default FromLogin;