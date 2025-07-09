import { useNavigate } from "react-router-dom";
import { Stats } from "../Components/Stats";
import { ThoughtCard } from "../Components/ThoughtCard";
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo";
import { useGetThoughts } from "../Hooks/useGetThoughts";
import { useEffect } from "react";

export const Feed = () => {
  const { thoughtArray } = useGetThoughts();
  const { isAuth } = useGetLocalInfo();
  const navigate = useNavigate();
  // console.log(thoughtArray)

  useEffect(() => {
    if(!isAuth){
      navigate("/login")
    }
  }, [isAuth])
    return (
      <div className="mt-5 bg-gradient-to-r from-black via-gray-900 to-black">
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
