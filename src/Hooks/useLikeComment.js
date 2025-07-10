import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useGetLocalInfo } from "./useGetLocalInfo"
import { db } from "../Auth/firebase-config"

export const useLikeComment = () => {

    const {name, photo, userId} = useGetLocalInfo()
    
    const addCommentLike = async (thoughtId, commentId) => {
        console.log("thoughtId", thoughtId)
        console.log("commentId", commentId)
        try {
            const thoughtRef = doc(db, "thoughts", thoughtId)
            const thoughtSnap = await getDoc(thoughtRef)

            const thoughtData = thoughtSnap.data()
            const comments = thoughtData.comments || [];
            console.log(comments)

           const updatedComments = comments.map((comment) => {
            if(comment.id === commentId){
                const currentLikes = comment.commentLikes || []

                const alreadyLiked = currentLikes.includes(userId)

                const updatedLikes = alreadyLiked ? currentLikes.filter((id) => id !== userId) : [...currentLikes, userId]

                return {
                    ...comment, commentLikes : updatedLikes
                }
            }

            return comment
           })
           await updateDoc(thoughtRef, {
            comments: updatedComments
           })

        } catch (error) {
            console.log(error)
        }
        
        // console.log(docRef)
    }

    return {addCommentLike}
}