import { useState} from "react"
import {USERS} from "../../constants/users"
import Button from "../button/Button"

const UserCard = ({userId, title, name, username, email, profileImage}) => {
    const [user, setUser] = useState(0)
    return <>
    <div>
        <img src={profileImage}/>
        <h3>Name: {name}</h3>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
    </div>
    <Button action={goback}>Previous</Button>
    <Button action={goFoward}>Next</Button>
    </>
}
const goback = (user, setUser) => {
    if(user <= 0) return
    setUser(user - 1)
}
const goFoward = (user, setUser) => {
    setUser(user + 1)
}
export default UserCard