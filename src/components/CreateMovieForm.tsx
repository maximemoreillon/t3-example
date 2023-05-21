import { FormEvent, useState } from "react";
import { api } from "~/utils/api";


export default (props: any) => {
  // Not 100% this is the right approach

  const movieCreateMutation = api.movie.creatOne.useMutation()

  const [title, setTitle] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await movieCreateMutation.mutateAsync({title})
    props.onCreated()
    setTitle("")
  }
  
  return (
    <>
    <h2 className="text-2xl my-4">Add a movie</h2>
    <form onSubmit={handleSubmit} className="">
      <input type="text" placeholder="Title" className="" onChange={e => {setTitle(e.target.value)}} value={title}/>
      <button type="submit" >Submit</button>
    </form>
    </>
  )

} 

