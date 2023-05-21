import { api } from "~/utils/api";

export default (props: any) => {
  const {movie} = props 
  const mutation = api.movie.deleteOne.useMutation()

  const deleteMovie = async () => {
    await mutation.mutateAsync({id: movie.id})
    props.onDeleted({id: movie.id})
  }


  return (
    <tr>
      <td>
        {movie.id}
      </td>
      <td>
        {movie.title}
      </td>
      <td>

      <button onClick={deleteMovie} className="">Delete</button>
      </td>
    </tr>
  )
}