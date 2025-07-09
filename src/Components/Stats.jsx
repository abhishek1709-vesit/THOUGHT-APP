import CountUp from "react-countup";
import { useAddComment } from "../Hooks/useAddComment";
import { useGetThoughts } from "../Hooks/useGetThoughts";

export const Stats = () => {


  const {thoughtArray} = useGetThoughts()
  const {count} = useAddComment()
  return (
    <div className="flex flex-wrap gap-y-5 gap-x-3 md:gap-x-0 justify-center md:flex-row md:justify-between mt-10">
      <div className="text-xl text-slate-400 flex flex-col items-center border-y-2 border-x-[0.5px]  rounded-full px-7 py-2 border-slate-500">
        Thoughts Shared <p className="text-blue-500"><CountUp end={thoughtArray.length}/></p>
      </div>
      <div className="text-xl text-slate-400 flex flex-col items-center border-y-2 border-x-[0.5px]  rounded-full px-7 py-2 border-slate-500">
        Active Users <p className="text-blue-500">✕</p>
      </div>
      <div className="text-xl text-slate-400 flex flex-col items-center border-y-2 border-x-[0.5px]  rounded-full px-7 py-2 border-slate-500">
        Comments posted <p className="text-blue-500">✕</p>
      </div>
    </div>
  );
};
