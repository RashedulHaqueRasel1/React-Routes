import { useLoaderData, useNavigate } from "react-router-dom"

export default function UserDetails( ) {

    const userDetails = useLoaderData();

    const navigate = useNavigate();

    const handelGoBack = () => {
      navigate(-1)
    }

    // console.log(userDetails)

    const {  name, website , phone , email} = userDetails;
  return (
    <div  className="border-solid border-2 border-rose-600 p-4 rounded-lg mt-6">
        <h1 className="text-3xl font-bold">Name : {name}</h1>
        <p  className="text-xl font-semibold ">Email : {email}</p>
        <p  className="text-xl font-semibold ">Phone : {phone}</p>
        <p  className="text-xl font-semibold ">Website : {website}</p>

        <button onClick={handelGoBack}>Go Back</button>
        
      
    </div>
  )
}
