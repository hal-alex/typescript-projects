const EventComponent: React.FC = () => {
  return (
    <div>
      EventComponent
      <input onChange={(e) => console.log(e)} />
    </div>
  )
}

export default EventComponent
