import { Link, useNavigate } from "react-router-dom";

export default function User({ user }) {
  const { id, name, website, phone, email } = user;

  const navigate = useNavigate();

  const handelShowBtn = () => {
    navigate(`/users/${id}`)
  }

  return (
    <div className="border-solid border-2 border-rose-600 p-4 rounded-lg mt-6">
      <h2 className="text-3xl font-bold">Name : {name}</h2>
      <p className="text-xl font-semibold ">Email : {email}</p>
      <p className="text-xl font-semibold ">Phone : {phone}</p>
      <p className="text-xl font-semibold ">Web : {website}</p>
      <Link to={`/users/${id}`}>
        <button className="mt-6">Show Details</button>
      </Link>

      <button onClick={handelShowBtn}>Show</button>

    </div>
  )
}
