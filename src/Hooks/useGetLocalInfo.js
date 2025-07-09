export const useGetLocalInfo = () => {
    const auth = JSON.parse(localStorage.getItem("thought-auth"))
    if(!auth) return {name:"", userId: "", photo: "", isAuth: false}

    const {name, userId, photo, isAuth} = auth
    return {name, userId, photo, isAuth}
}