import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useGetLocalInfo } from "./useGetLocalInfo"
import { db } from "../Auth/firebase-config"

export const useAddThought = () => {
    const {userId, name, photo} = useGetLocalInfo()
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
            title: title || name,
            thought,
            createdAt: serverTimestamp(),
            likes: [],
            comments: [],
        })
    }
    return {addThought}
}