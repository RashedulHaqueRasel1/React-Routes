import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {

  const error = useRouteError();
  console.log(error)

  return (
    <div className="">
 
        <h2 className="text-7xl mt-6 mb-6">Oops!!</h2>

        {/* <p> {error.statusText  || error.message} </p> */}

        {

          error.status === 404 && <div>
            <p  className="text-4xl text-red-600 mt-6">Page Not Found</p>
            <Link to={`/`}>
            <button className="mt-6">Go Back</button>
            </Link>
          </div>


        }
      
    </div>
  )
}
