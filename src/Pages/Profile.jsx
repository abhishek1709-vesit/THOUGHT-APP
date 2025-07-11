import { useEffect } from "react";
import { ThoughtCard } from "../Components/ThoughtCard";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
import { useGetThoughts } from "../Hooks/useGetThoughts";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Auth/firebase-config";
import defaultImg from "../images/default-img.png";
import { Loader } from "../Components/Loader";

export const Profile = () => {
  const handleDelete = async (id) => {
    const confirmation = confirm("Do you want to delete this thought?");
    if (!confirmation) return;

    try {
      // console.log(id);
      await deleteDoc(doc(db, "thoughts", id));
      alert("Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  
  const { getUserThoughts, userThoughts, loading } = useGetThoughts();
  const { name, photo, userId } = useGetLocalInfo();
  useEffect(() => {
    getUserThoughts(userId);
  }, []);
  if(loading) return <Loader/>
  return (
    <div className="flex flex-col items-center py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-16 flex items-center">
          <img src={photo || defaultImg} alt="Your Profile Picture" className="rounded-full"/>
        </div>
        <p>{name}</p>
      </div>
      <div>
        <ul className="flex flex-col gap-y-6">
          {userThoughts.map((curThought) => {
            // console.log(curThought);
            const { id, name, title, thought, createdAt, photo, likes, comments } = curThought;
            return (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center gap-6 border-2 border-slate-700 p-4 rounded-2xl"
              >
                <ThoughtCard
                  createdAt={createdAt}
                  name={name}
                  photo={photo}
                  thought={thought}
                  title={title}
                  id={id}
                  likes={likes}
                  comments={comments}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(id)}
                    className="flex items-center gap-2 px-3 py-1 rounded-xl border-slate-700 text-red-600 cursor-pointer border-2"
                  >
                    Delete <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
