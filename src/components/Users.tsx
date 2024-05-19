
import { TUser, useUserStore } from '../store/userStore'

const Users = (user: TUser) => {
    const removeUser = useUserStore((state) => state.removeUser)
    const updateUser = useUserStore((state) => state.updateUser)
  return (
    <div className='card'>
        <div className="card-title">{user.name} <span className='' onClick={()=> removeUser(user.id)}>x</span> <span onClick={()=> updateUser(user.id,"FSUU")}>update</span></div>
        <div className="card-body">
            <p>{user.id}</p>
            <p>{user.school.schoolName}</p>
        </div>
    </div>
  )
}

export default Users