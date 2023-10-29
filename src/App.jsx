import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import BlurLogin from "./components/BlurLogin.jsx";
import LoginValidateFormSubmit from "./components/LoginValidateFormSubmit.jsx";
import SignupValidateViaProps from "./components/SignupValidateViaProps.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <SignupValidateViaProps />
      </main>
    </>
  );
}

export default App;
