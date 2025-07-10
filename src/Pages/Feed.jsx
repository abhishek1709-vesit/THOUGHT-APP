import { useNavigate } from "react-router-dom";
import { Stats } from "../Components/Stats";
import { ThoughtCard } from "../Components/ThoughtCard";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
import { useGetThoughts } from "../Hooks/useGetThoughts";
import { useEffect } from "react";
import { Loader } from "../Components/Loader";

export const Feed = () => {
  const { thoughtArray, loading } = useGetThoughts();
  const { isAuth } = useGetLocalInfo();
  // console.log(thoughtArray)
  if(loading) return <Loader />
  return (
    <div className="my-10 bg-gradient-to-r from-black via-gray-900 to-black">
        <div>
          <Stats />
        </div>
        <ul className="flex items-center justify-center flex-col gap-10 mt-10 ">
          {thoughtArray.map((curThought) => {
            // console.log(curThought.likes)
            const { createdAt, name, photo, thought, title, id, likes, comments } = curThought;
            // console.log(id)
            return (
              <ThoughtCard
                key={id}
                createdAt={createdAt}
                name={name}
                photo={photo}
                thought={thought}
                title={title}
                id={id}
                likes = {likes}
                comments={comments}
              />
            );
          })}
        </ul>
      </div>
    );
  
};
