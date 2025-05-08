import { useState} from "react"
import {USERS} from "../../constants/users"
import Button from "../button/Button"

const UserCard = ({userId, title, name, username, email, profileImage}) => {
    const [user, setUser] = useState(0);
    const currentUser = USERS[user];
    return <>
     <div>
        <img src={currentUser.profileImage} alt={`${currentUser.name} profile`} />
        <h3>Name: {currentUser.name}</h3>
        <p>Username: {currentUser.username}</p>
        <p>Email: {currentUser.email}</p>
      </div>
      <Button action={() => goback(user, setUser)} disabled={user === 0}>Previous</Button>
      <Button action={() => goFoward(user, setUser)} disabled={user === USERS.length - 1}>Next</Button>
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