import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase-config";
import { useNavigate } from "react-router-dom";

export const useLogIn = () => {
    const navigate = useNavigate()
  const hooklogIn = async (email, password) => {
    try {
      const results = await signInWithEmailAndPassword(auth,email,password);
      console.log(results);
      const authUserInfo = {
        name: results.user.displayName,
        userId: results.user.uid,
        photo: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("thought-auth", JSON.stringify(authUserInfo));
      console.log("Authenticated");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {hooklogIn}
};