import defaultImg from "../images/default-img.png";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { useAddLike } from "../Hooks/useAddLike";
import { useState } from "react";
import { Comment } from "./Comment";

export const ThoughtCard = ({createdAt,name,photo,thought,title, id, likes, comments}) => {
  const { addLike } = useAddLike();
  const [commentOn, setCommentOn] = useState(false);
  const toggleComment = () => setCommentOn(true);
  const closeComment = () => setCommentOn(false);

  const handleLike = (id) => {
    console.log(id);
    addLike(id, likes);
  };
  return (
    <li className="border-2 border-slate-600 rounded-2xl p-2 w-[80vw] md:w-[40vw]">
      <div className="flex items-start w-full ">
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border">
            <img
              src={photo || defaultImg}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p>{name || "Anonymous"}</p>
            
            <p>
              {createdAt?.toDate().toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 mt-3 rounded-2xl p-2">
        <p className="text-style text-3xl md:text-5xl">{title}</p>
        <p className="text-xl mt-3">{thought}</p>
      </div>
      <div className="mt-3 ml-3 flex gap-3 text-2xl">
        <button className="cursor-pointer" onClick={() => handleLike(id)}>
          <AiFillLike />
          <p className="text-sm">{likes ? likes?.length : 0}</p>
        </button>
          <Comment id={id} commentArray={comments} commentOn={commentOn} onClose={closeComment}  />
        <button className="cursor-pointer" onClick={toggleComment}>
          <FaComment />
          <p className="text-sm">{comments ? comments?.length : 0}</p>
        </button>
      </div>
    </li>
  );
};
