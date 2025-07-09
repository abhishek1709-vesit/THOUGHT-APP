import { useState } from "react";
import { useLogIn } from "../Hooks/useAddLogIn";
import { Navigate, useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate()
  const logInWithGoogle = async () => {
      const results = await signInWithPopup(auth, provider);
      console.log(results);
      const authUserInfo = {
        name: results.user.displayName,
        userId: results.user.uid,
        photo: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("thought-auth", JSON.stringify(authUserInfo));
      navigate("/");
    };
    const {hooklogIn} = useLogIn()
    const handleFormSubmit = (e) => {
        e.preventDefault();
    hooklogIn(email, password)
    }
  return <div className="flex flex-col items-center my-10">
      <form onSubmit={handleFormSubmit} className="shadow-lg shadow-slate-500 border-t-4 border-x-[1px] border-b-[1px] rounded-2xl border-slate-700 p-8 flex flex-col gap-2 items-center">
        <p className="text-style text-xl">Log In</p>
        <div className="mt-5">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="border-2 rounded-2xl px-2 py-1 border-slate-700"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-2 rounded-2xl px-2 py-1 border-slate-700"
          />
        </div>
        <button type="submit" className="border-t-2 border-x-[1px] border-b-[1px] px-4 py-1 flex mt-3 rounded-3xl border-slate-700">Log In</button>

        <span>OR</span>

      <button onClick={logInWithGoogle} className="border-t-4 border-x-[1px] border-b-[1px] px-4 py-1 flex  rounded-3xl border-slate-700">Log In With Google</button>
      </form>
    </div>
};
