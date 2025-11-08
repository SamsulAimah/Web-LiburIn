import AuthLayouts from "../components/Layout/AuthLayouts";
import FromRegister from "../components/Fragments/FormRegister";


const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FromRegister />
     
    </AuthLayouts>
  );
};
export default RegisterPage;
