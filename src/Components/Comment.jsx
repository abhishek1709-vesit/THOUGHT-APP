import { useState } from "react";
import defaultImg from "../images/default-img.png";
import { useAddComment } from "../Hooks/useAddComment";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
export const Comment = ({ id, commentArray, commentOn, onClose }) => {
  if (!commentOn) return null;
  const [comment, setComment] = useState("");
  const { addComment } = useAddComment();
  const { name, photo } = useGetLocalInfo();

  const handleAddComment = (e, id) => {
    e.preventDefault();
    addComment(comment, id, commentArray);
    setComment("");
    // console.log(commentArray);
  };

  return (
    <div className="fixed inset-0 bg-black opacity-70 z-50 flex justify-center items-center ">
      <div className="flex flex-col border-2 border-slate-700 bg-slate-800 bg-gradient-to-b from-black via-gray-800 to-black w-[90vw] md:w-[50vw] h-[80vh] p-4 rounded-2xl relative overflow inset-y-auto">
        <div>
          <p>Comments :- </p>
          <button
            onClick={onClose}
            className="text-style absolute  top-4 right-4 text-xl font-bold text-white cursor-pointer hover:text-gray-500"
          >
            ✕
          </button>
        </div>

        <ul className="overflow-y-auto mb-20">
          {commentArray.map((curComment, index) => {
            // console.log(curComment);
            const { name, photo, text, createdAt } = curComment;
            return (
                <li className="mt-3 flex flex-col mb-5" key={index}>
                  <div className="flex gap-2">
                    <div className=" w-6 h-5">
                      <img src={photo} alt="" className="rounded-full" />
                    </div>
                    <div>
                      <p className="text-base">{name}</p>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p>{text}</p>
                  </div>
                </li>
            );
          })}
        </ul>
        <form
          onSubmit={(e) => handleAddComment(e, id)}
          className="absolute bottom-5 w-full p-4"
        >
          <input
            type="text"
            placeholder="Add a comment"
            className="bg-white text-black w-[90%]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="absolute right-25 text-black">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
