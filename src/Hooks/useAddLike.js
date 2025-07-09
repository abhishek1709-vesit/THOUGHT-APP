import { doc, updateDoc } from "firebase/firestore";
import { useGetLocalInfo } from "./useGetLocalInfo"
import { db } from "../Auth/firebase-config";

export const useAddLike = () => {
    const {userId} = useGetLocalInfo()
    let likesArray;
    const addLike = async (id, currentLikes = []) => {
       const thoughtRef = doc(db, "thoughts", id)
       const alreadyLiked = currentLikes.includes(userId)
       const updatedLikes = alreadyLiked ? currentLikes.filter((curId) => curId != userId) : [...currentLikes, userId]

       try {
        await updateDoc(thoughtRef, {
            likes:updatedLikes
        })
       } catch (error) {
        console.log(error)
       }
    }
    return {addLike}
}