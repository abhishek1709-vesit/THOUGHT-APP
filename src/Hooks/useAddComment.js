import { doc, updateDoc } from "firebase/firestore"
import { db } from "../Auth/firebase-config"
import { useGetLocalInfo } from "./useGetLocalInfo"

export const useAddComment = () => {
    let count = 0
    const {name, photo} = useGetLocalInfo()
    const addComment = async (comment, id, commentArray=[]) => {
        console.log(comment)
        console.log(id)
        console.log(commentArray)
        const thoughtRef = doc(db, "thoughts", id)

        const newComment = {
            text: comment,
            name: name,
            photo: photo,
            createdAt: new Date().toISOString()
        }
        const updatedComments = [...commentArray, newComment]
        count = count + updatedComments.length
        try {
            await updateDoc(thoughtRef, {
                comments: updatedComments
            })
            count += 1
        } catch (error) {
            console.log(error)
        }
    }

    return {addComment}
}