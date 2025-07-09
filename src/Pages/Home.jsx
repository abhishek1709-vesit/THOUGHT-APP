import { NavLink } from "react-router-dom";
import thoughtImg from "../images/thought-removebg-preview.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import {gsap} from "gsap"
import { useEffect } from "react";
import { Stats } from "../Components/Stats";

export const Home = () => {
  useEffect(() => {
    gsap.fromTo(".hero-text", 
      {x:-100, opacity:0},
      {x:0, opacity:1, duration:1.3, delay:1, stagger:0.3}
    )

    gsap.fromTo(".img", 
      {x:100, opacity:0},
      {x:0, opacity:1,duration:1.5, delay:1}
    )

    gsap.fromTo(".thought",
      {y:100, opacity:0},
      {y:0, opacity:1, duration:1.2, delay:1.8
      }
    )
  },[])
  return (
    <div className="flex mx-10 flex-wrap md:flex-col">
      <div className="mt-10 grid gap-x-10 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="hero-text hero-text-style text-2xl md:text-3xl">
            Share Your Thoughts.Inspire Your Circle.
          </p>
          <p className="hero-text hero-text-style text-xl md:text-2xl">
            Because every idea deserves to be heard.
          </p>
          <p className="hero-text text-style text-[14px]">
            Welcome to ThoughtShare — a space where students like you freely
            express ideas, reflections, opinions, or just random thoughts.
            Whether it's deep, funny, casual, or motivational — your words
            matter. Join the conversation and see what others are thinking too.
          </p>
          <button className="hero-text border-2 px-4 py-2 mb-10 md:mb-0 rounded-full border-slate-700">
            <NavLink to="/feed" className="flex gap-2 items-center">
              Explore Feed <FaLongArrowAltRight />
            </NavLink>
          </button>
        </div>
        <div>
          <img src={thoughtImg} alt="Thought" className="img"/>
        </div>
      </div>
      <div className="thought mt-12 border-t border-[#333] text-xl pt-6 text-center text-gray-400 italic">
        “A thought shared is a thought remembered.” — Anonymous
      </div>
      <Stats></Stats>
      <div className="mt-16 text-center text-gray-400 text-sm italic"> Built by Abhishek and friends at XYZ College 🏫 to help students think, write, and grow together. </div>
    </div>
  );
};
