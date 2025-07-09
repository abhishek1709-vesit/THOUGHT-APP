import { useState } from "react"
import { useAddThought } from "../Hooks/useAddThought"

export const NewThought = () => {
  const[title, setTitle] = useState("")
  const[thought, setThought] = useState("")
  const {addThought} = useAddThought()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    addThought({title, thought})
    alert("Thought Added")
  }
  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 w-[30vw]">
        <input type="text" placeholder="Title" className="bg-white text-black" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Thought" className="bg-white text-black" value={thought} onChange={(e)=>setThought(e.target.value)}/>
        <button type="submit">Add Thought</button>
      </form>
    </div>
  )
}

