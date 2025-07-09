import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] rounded-2xl border-gray-700 flex flex-wrap flex-col items-center">
      <div className="my-4 bg-[#111827] flex flex-wrap gap-10 justify-around items-center w-full h-full text-center py-6 border-t border-gray-700 mt-10">
        <div className="text-style text-xl md:text-3xl flex items-center md:items-start gap-1 flex-col">
          <p>Share Your Thoughts</p>
          <p>Inspire Others</p>
          <p>Build Community</p>
        </div>
        <div className="flex flex-col">
          <p className="text-style text-xl">Contact Us Here :- </p>
          <form className="border-t-2 border-x-[1px] border-b-[1px] p-3 rounded-2xl border-slate-700 shadow-lg shadow-slate-400 flex flex-col gap-4 items-center justify-center mt-2">
            <input
              type="text"
              placeholder="Enter Name"
              required
              className="border-t-2 border-x-[1px] border-b-[1px] border-slate-600 px-2 py-1"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="border-t-2 border-x-[1px] border-b-[1px] border-slate-600 px-2 py-1"
            />
            <textarea
              rows="5"
              cols="30"
              type="email"
              placeholder="Enter Message"
              required
              className="border-t-2 border-x-[1px] border-b-[1px] border-slate-600 px-2 py-1"
            />
          </form>
        </div>
      </div>
      <div className="flex gap-8 my-10">
        <a href="https://api.whatsapp.com/send/?phone=919869123931" target="_blank" className="text-2xl flex flex-col items-center"><FaWhatsapp className="text-[#0CC143]"/><p className="text-base">WhatsApp</p></a>
        <a href="https://linkedin.com/in/abhishek-gore-ab3217310" target="_blank" className="text-2xl flex flex-col items-center"><FaLinkedin className="text-[#0073B2]"/><p className="text-base">LinkedIn</p></a>
        <a href="https://www.instagram.com/abhishek_gore9097.77/" className="text-2xl flex flex-col items-center"><FaInstagram className="text-[#FC0EBA]"/><p className="text-base">Instagram</p></a>
        <a href="https://github.com/abhishek1709-vesit" target="_blank" className="text-2xl flex flex-col items-center"><FaGithub /><p className="text-base">GitHub</p></a>
      </div>
    </footer>
  );
};
