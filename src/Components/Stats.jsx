import CountUp from "react-countup";
import { useAddComment } from "../Hooks/useAddComment";
import { useGetThoughts } from "../Hooks/useGetThoughts";

export const Stats = () => {


  const {thoughtArray} = useGetThoughts()
  const {count} = useAddComment()
  return (
    <div className="flex justify-center w-[80vw]">
      <div className="text-xl text-slate-400 flex flex-col text-center items-center border-y-4 max-w-[60vw] min-w-[30vw] border-x-[0.5px] rounded-full px-7 py-2 border-slate-500">
        Thoughts Shared <p className="text-blue-500"><CountUp end={thoughtArray.length}/></p>
      </div>
    </div>
  );
};
