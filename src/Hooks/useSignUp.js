import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase-config";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
    const navigate = useNavigate()
  const signUp = async (email, password, username) => {
    try {
      const results = await createUserWithEmailAndPassword(auth,email,password);
      console.log(results);
      const authUserInfo = {
        name: username,
        userId: results.user.uid,
        photo: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("thought-auth", JSON.stringify(authUserInfo));
      console.log("Authenticated");
      navigate("/");
    } catch (error) {
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        alert("This email is already registered. Try logging in.");
      } else if (errorCode === 'auth/invalid-email') {
        alert("Invalid email format.");
      } else if (errorCode === 'auth/weak-password') {
        alert("Password is too weak. Minimum 6 characters required.");
      } else {
        alert("Error: " + errorMessage);
      }
    }
  };

  return {signUp}
};
