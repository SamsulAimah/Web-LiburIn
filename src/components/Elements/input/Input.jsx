import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = (props) => {
  const { type, placeholder, name } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        name={name}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-orange-400 focus:border-orange-400 block w-full px-3 py-2 pr-10 transition duration-150 ease-in-out"
      />

      {type === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default Input;
