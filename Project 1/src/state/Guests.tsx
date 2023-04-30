import { useState } from "react"

const Guests: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [guestList, setGuestList] = useState<string[]>([])

  const onclick = () => {
    setGuestList([...guestList, name])
    setName("")
  }
  return (
    <div>
      List of guests
      <div>
        <ul>
          {guestList.map((guestName) => (
            <li key={guestName}>{guestName}</li>
          ))}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onclick}>Add guest</button>
      </div>
    </div>
  )
}

export default Guests
