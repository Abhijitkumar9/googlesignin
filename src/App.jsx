import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          const decode1 = jwtDecode(credentialResponse.credential);
          console.log(decode1);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </>
  );
}

export default App;
