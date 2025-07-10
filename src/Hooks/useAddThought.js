import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useGetLocalInfo } from "./useGetLocalInfo"
import { db } from "../Auth/firebase-config"
import { useState } from "react"

export const useAddThought = () => {
    const {userId, name, photo} = useGetLocalInfo()
    const [thoughtAdded, setThoughtAdded] = useState(false)

    const thoughtCollectionRef = collection(db, "thoughts")

    const addThought = async ({title, thought}) => {
        if(thought === ""){
            alert("Thought cannot be empty")
            return
        } 
        addDoc(thoughtCollectionRef, {
            userId,
            name,
            photo,
            title: title || "No Title",
            thought,
            createdAt: serverTimestamp(),
            likes: [],
            comments: [],
        })
        setThoughtAdded(!thoughtAdded)
    }
    return {addThought, thoughtAdded}
}