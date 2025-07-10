import { doc, updateDoc } from "firebase/firestore"
import { db } from "../Auth/firebase-config"

export const useDeleteComment = () => {

    const deleteComment = async (thoughtId, commentId, commentArray) => {
        const updatedComments = commentArray.filter((curComment) => curComment.id !== commentId)

        try {
            const docref = doc(db, "thoughts", thoughtId)
            await updateDoc(docref, {
                comments:updatedComments
            })
        } catch (error) {
            console.log(error)
        }
    }

    return {deleteComment}
}