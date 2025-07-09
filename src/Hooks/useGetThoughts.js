import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../Auth/firebase-config"
import { useEffect, useState } from "react"

export const useGetThoughts = () =>  {
    const [thoughtArray, setThoughtArray] = useState([])
    const thoughtCollectionRef = collection(db, "thoughts")
    const [userThoughts, setUserThoughts] = useState([])

    const getThoughts = async () => {
        let unsubscribe;
        try {
            const queryThoughts = query(thoughtCollectionRef, orderBy("createdAt"))
            unsubscribe = onSnapshot(queryThoughts, (snapshots) => {
                // console.log(snapshots)
                let docs = []
                snapshots.forEach((doc) => {
                    const data = doc.data()
                    const id = doc.id;
                    docs.push({...data, id})
                    setThoughtArray(docs)
                })
            })
        } catch (error) {
            console.log(error)
        }

        return () => unsubscribe()
    }

    const getUserThoughts = (userId) => {
        let user_unsub;
        try {
            const queryThoughts = query(thoughtCollectionRef, where("userId", "==", userId))
            user_unsub = onSnapshot(queryThoughts, (snapshots) => {
                let user_docs = []
                snapshots.forEach((doc) => {
                    const data = doc.data()
                    const id = doc.id
                    user_docs.push({...data, id})
                    setUserThoughts(user_docs)
                })
            })
        } catch (error) {
            console.log(error)
        }

        return () => user_unsub()
    }

    useEffect(()=> {
        getThoughts()
        // getUserThoughts()
    },[])

    return {thoughtArray, getUserThoughts, userThoughts}
}