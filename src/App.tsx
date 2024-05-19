import Users from "./components/Users"
import { useUserStore } from "./store/userStore"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  const {users,addUser} = useUserStore((state) => ({
    users: state.users,
    addUser: state.addUsers,
  }))

  const autoIncId = useUserStore.getState().users.length

  return (
    <>
    <div className="container">
      {users.map((user) => (
        <Users id={user.id} name={user.name} age={user.age} school={user.school} />
      ))}
      <button className="btn btn-success" onClick={() => addUser({id:autoIncId +1, name: "king", age: 22, school:{id:0,schoolName:"BCSAT", address:"Butuan"}})}>add user</button>
    
    </div>
     </>
  )
}

export default App
