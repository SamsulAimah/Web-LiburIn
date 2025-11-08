import AuthLayouts from "../components/Layout/AuthLayouts";
import FromLogin from "../components/Fragments/FormLogin";


const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FromLogin />
    </AuthLayouts>
  );
};
export default LoginPage;
