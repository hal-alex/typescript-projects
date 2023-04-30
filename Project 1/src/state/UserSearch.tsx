import { useState } from "react"
const UserSearch: React.FC = () => {
  const users = [
    { name: "A", age: 30 },
    { name: "B", age: 30 },
    { name: "C", age: 30 },
  ]

  const [name, setName] = useState("")
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onclick = () => {
    const foundUser = users.find((user) => user.name === name)
    console.log(foundUser)
    setUser(foundUser)
  }
  return (
    <div>
      UserSearch
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onclick}>Search</button>
        {/* {user && user.name}
        {user && user.age} */}
        {user?.name}
        {user?.age}
      </div>
    </div>
  )
}

export default UserSearch
