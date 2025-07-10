import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/firebase-config";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const { isAuth } = useGetLocalInfo()
  const navigate = useNavigate()
  const [menuToggle, setMenuToggle] = useState(false)
  useEffect(() => {
    gsap.fromTo(logoRef.current, 
      {y:-50, opacity:0},
      {y:0, opacity:1, duration:1.2}
    )
  }, [])
  const location = useLocation()
  const homePage = location.pathname === "/"
  const newThoughtPage = location.pathname === "/new-thought"
  const profilePage = location.pathname === "/profile"
  const feedPage = location.pathname === "/feed"
  const logoRef = useRef()
  const handleLogOut = async () => {
    await signOut(auth)
    navigate("/")
    localStorage.clear()
    alert("Sign Out Successful")
  }
  return (
    <div className="flex justify-around  items-center py-3.5 bg-[#111827] rounded-b-full rounded-t-full shadow-gray-400 ">
      <div>
        <NavLink to={"/"} className="text-style text-4xl" ref={logoRef}>Thryve</NavLink>
      </div>
      <div className="flex items-center space-x-6 text-style">
        <button onClick={() => setMenuToggle(!menuToggle)} className="inline-block md:hidden"><IoMenu /></button>
        <NavLink to="/feed" className={`${feedPage? "text-[#a1a1aa] text-style text-xl underline underline-offset-4 hidden md:inline-block" : "text-white text-style text-xl hidden md:inline-block"}`}>
          Feed
        </NavLink>

        <NavLink to="/new-thought" className={`${newThoughtPage? "text-[#a1a1aa] text-style text-xl underline underline-offset-4 hidden md:inline-block" : "text-white text-style text-xl hidden md:inline-block"}`}>
          New Thought
        </NavLink>
        
        {isAuth && <NavLink to="/profile" className={`${profilePage? "text-[#a1a1aa] text-style text-xl underline underline-offset-4 hidden md:inline-block " : "text-white text-style text-xl hidden md:inline-block"}`}>
          Profile
        </NavLink>}

        <NavLink to="/signUp" className={`text-xl ${isAuth ? "hidden" : "inline-block"}`}>Sign Up </NavLink>
        <NavLink to="/login" className={`text-xl ${isAuth ? "hidden" : "inline-block"}`}>
          Login
        </NavLink>
        <div>
          
          <button onClick={handleLogOut} className={`${isAuth ? "inline" : "hidden"} border-t-2 border-b-[1px] border-x-[0.5px] px-5 rounded-full `}>
            <NavLink to={"/login"} className="flex justify-center items-center py-1 gap-x-3 hover:scale-110"><CiLogout className="text-white "/> Log Out</NavLink>
          </button>
        </div>
      </div>
      {
        menuToggle && (
          <div className="absolute top-[70px] right-5 bg-gray-800 p-4 rounded-xl flex flex-col space-y-3 md:hidden z-50">
          <NavLink to="/feed" className="text-white text-style text-xl" onClick={() => setMenuToggle(false)}>
            Feed
          </NavLink>
          <NavLink to="/new-thought" className="text-white text-style text-xl" onClick={() => setMenuToggle(false)}>
            New Thought
          </NavLink>
          {isAuth && (
            <NavLink to="/profile" className="text-white text-style text-xl" onClick={() => setMenuToggle(false)}>
              Profile
            </NavLink>
          )}
          {!isAuth && (
            <>
              <NavLink to="/signUp" className="text-white text-xl" onClick={() => setMenuToggle(false)}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className="text-white text-xl" onClick={() => setMenuToggle(false)}>
                Login
              </NavLink>
            </>
          )}
          {isAuth && (
            <button onClick={() => { handleLogOut(); setMenuOpen(false); }} className="text-white text-xl">
              Log Out
            </button>
          )}
        </div>
        )
      }
    </div>
  );
};
