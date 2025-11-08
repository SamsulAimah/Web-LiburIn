import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;

  // Cek apakah halaman login atau register
  const isLogin = title?.toLowerCase().includes("login");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold text-orange-600 mb-1">{title}</h1>

        <p className="text-sm text-gray-600 mb-5">
          {isLogin
            ? "Welcome back! Please log in to access your account."
            : "Create your account and start your journey with us."}
        </p>

        {children}
        <p className="text-sm text-gray-600 mt-4 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-orange-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-orange-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
