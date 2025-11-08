import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient from-blue-50 to-blue-100 px-6 text-center">
      <h1 className="text-[120px] font-extrabold text-orange-500 drop-shadow-md select-none">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.  
        Let's get you back to safety.
      </p>

      <button
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        <ArrowLeftCircle size={20} />
        Back to Home
      </button>

      {/* <div className="mt-12">
        <img
          src="logo.svg"
          alt="Not Found Illustration"
          className="w-72 opacity-90"
        />
      </div> */}
    </div>
  );
};

export default NotFound;
