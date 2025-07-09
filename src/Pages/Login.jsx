import { signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { auth, provider } from "../Auth/firebase-config"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const[username, setUsername] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const logInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider) 
    console.log(results)
    const authUserInfo = {
      name: results.user.displayName,
      userId: results.user.uid,
      photo: results.user.photoURL,
      isAuth: true
    }
    localStorage.setItem("thought-auth", JSON.stringify(authUserInfo))
    console.log("Authenticated")
    navigate("/")
  }
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="my-10 flex flex-col items-center justify-center border-2 border-slate-700 rounded-2xl h-[20vw] w-[20vw] p-2 shadow-xl shadow-gray-500">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 items-center">
                <p className="text-xl text-gray-400">Log In</p>
                <div>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border-y-2 border-x-[0.5px] rounded-xl pl-2 py-2 border-slate-600" placeholder="Username"/>
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-y-2 border-x-[0.5px] rounded-xl pl-2 py-2 border-slate-600" placeholder="Password"/>
                </div>
                <button type="submit" className="border-y-2 rounded-full px-3 py-1 border-x-[0.5] border-slate-500">Log In</button>
            </form>
            <button onClick={logInWithGoogle} className="mt-6 border-y-2 rounded-full px-3 py-1 border-x-[0.5] border-slate-500">Log In With Google</button>
        </div>
    </div>
  )
}

