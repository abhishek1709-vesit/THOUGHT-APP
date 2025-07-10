import { useEffect, useState } from "react"
import { useAddThought } from "../Hooks/useAddThought"
import { useNavigate } from "react-router-dom"
import { useGetLocalInfo } from "../Hooks/useGetLocalInfo"

export const NewThought = () => {
  const[title, setTitle] = useState("")
  const[thought, setThought] = useState("")
    const { isAuth } = useGetLocalInfo();
  const navigate = useNavigate();
  
  const {addThought} = useAddThought()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    addThought({title, thought})
    alert("Thought Added")
  }

  useEffect(() => {
      if(!isAuth){
        navigate("/signUp")
      }
    }, [isAuth])
  return (
    <div className="flex justify-center my-10">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 w-[80vw] md:w-[30vw] border-t-2 border-x-[1px] border-b-[1px] rounded-2xl border-slate-600 p-4">
        <input type="text" placeholder="Title" className="bg-gray-400 text-black placeholder:text-black px-3 py-1 rounded-2xl border-slate-700" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea rows="5"  type="text" placeholder="Thought" className="bg-gray-400 text-black placeholder:text-black px-3 py-1 rounded-2xl border-slate-700"  value={thought} onChange={(e)=>setThought(e.target.value)}/>
        <button type="submit">Add Thought</button>
      </form>
    </div>
  )
}

