import "./App.css"
import Guests from "./state/Guests"
import UserSearch from "./state/UserSearch"
import EventComponent from "./events/EventComponent"
function App() {
  return (
    <div>
      <Guests />
      <UserSearch></UserSearch>
      <EventComponent></EventComponent>
    </div>
  )
}

export default App
