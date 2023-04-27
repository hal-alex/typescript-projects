interface ChildProps {
  color: string
}

export const Child = ({ color }: ChildProps) => {
  return <div>Here is my color: {color}</div>
}
