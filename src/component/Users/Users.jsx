import { useLoaderData } from "react-router-dom"
import User from "../User/User"

export default function Users() {

    const users = useLoaderData()

    // console.log(users)

  return (
    <div>
      
      <h2 className="text-center font-bold text-4xl mt-7">Total Users : {users.length}</h2>

      <div className="grid md:grid-cols-3 gap-3 container mx-auto">
        {
            users.map((user) => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  )
}
