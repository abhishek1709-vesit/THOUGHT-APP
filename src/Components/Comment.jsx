import { useState } from "react";
import defaultImg from "../images/default-img.png";
import { useAddComment } from "../Hooks/useAddComment";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
import { MdDelete } from "react-icons/md";
import { useDeleteComment } from "../Hooks/useDeleteComment";
import { AiFillLike } from "react-icons/ai";
import { useLikeComment } from "../Hooks/useLikeComment";
export const Comment = ({ id, commentArray, commentOn, onClose }) => {
  if (!commentOn) return null;
  const [comment, setComment] = useState("");
  const { addComment } = useAddComment();
  const { name, photo } = useGetLocalInfo();
  const { deleteComment } = useDeleteComment();
  const { addCommentLike } = useLikeComment();

  const handleAddComment = (e, id) => {
    e.preventDefault();
    addComment(comment, id, commentArray);
    setComment("");
    // console.log(commentArray);
  };

  const handleDeleteClick = (commentId) => {
    deleteComment(id, commentId, commentArray);
  };

  const handleLikeComment = (commentId) => {
    // console.log("thoughtId", id)
    // console.log("Comment Id", commentId)
    addCommentLike(id, commentId);
  };

  return (
    <div className="fixed inset-0 bg-black opacity-80 z-50 flex justify-center items-center ">
      <div className="flex flex-col border-2 border-slate-700 bg-slate-800 bg-gradient-to-b from-black via-gray-800 to-black w-[90vw] md:w-[50vw] h-[80vh] p-4 rounded-2xl relative overflow inset-y-auto">
        <div>
          <p className="font-bold">Comments :- </p>
          <button
            onClick={onClose}
            className="text-style absolute  top-4 right-4 text-xl font-bold text-white cursor-pointer hover:text-gray-500"
          >
            ✕
          </button>
        </div>

        <ul className="overflow-y-auto mb-20 font-medium">
          {commentArray.map((curComment, index) => {
            console.log(curComment);
            const {
              name: commenterName,
              photo,
              text,
              createdAt,
              id: commentId,
              commentLikes,
            } = curComment;
            const userComment = name === commenterName;
            return (
              <li className="mt-3 flex flex-col mb-5" key={index}>
                <div className="flex gap-2 mb-2 ">
                  <div className="w-9 h-2 rounded-full">
                    <img
                      src={photo || defaultImg}
                      alt=""
                      className="rounded-full border-2"
                    />
                  </div>
                  <div>
                    <p className="text-base">{commenterName}</p>
                  </div>
                </div>
                <div className="mt-2 break-words">
                  <p>{text}</p>
                </div>
                <div className="flex gap-3 items-center">
                  {userComment && (
                    <button
                      onClick={() => handleDeleteClick(commentId)}
                      className="cursor-pointer"
                    >
                      <MdDelete />
                    </button>
                  )}
                  <button
                    onClick={() => handleLikeComment(commentId)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <AiFillLike />
                    {commentLikes.length}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <form
          onSubmit={(e) => handleAddComment(e, id)}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:px-4"
        >
          <div className="flex items-center bg-white rounded-2xl px-3">
            <input
              type="text"
              placeholder="Add a comment"
              className="flex-1 flex-nowrap min-w-0 text-black md:py-2 bg-transparent outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className=" ml-2 bg-black p-1 rounded-2xl text-base md:text-xl font-bold px-2 my-1">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
