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
      console.log(error)
    }
  };

  return {signUp}
};
