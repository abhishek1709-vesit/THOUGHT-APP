import { useState } from "react";
import { useLogIn } from "../Hooks/useAddLogIn";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Auth/firebase-config";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

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
        hooklogIn(username, email, password)
    }
  return <div class="flex items-center min-h-screen">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Log in</h1>
                <p class="text-gray-500 dark:text-gray-400">Log in to access your account</p>
            </div>
            <div class="m-7">
                <form onSubmit={handleFormSubmit}>
                    <div class="mb-6">
                        <label for="username" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="text" name="username" id="username" placeholder="Username" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="your@name.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-6">
                        <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Log in</button>
                    </div>
                    <p class="text-sm text-center text-gray-400">Don't have an account yet? <NavLink to="/signUp" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</NavLink>.</p>
                </form>
            </div>
        </div>
    </div>
</div>
};
